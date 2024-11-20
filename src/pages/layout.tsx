import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    background: white;
    text-align: center;
    margin-bottom: 2px;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 768px) {
        text-align: left;
        padding: 5px 10px;
        display: flex;
        flex-direction: column;
        align-items: space-between;
    }
`;

const Logo = styled.img`
    margin-top: 20px;
    height: 120px;
    align-self: center;

    @media (max-width: 768px) {
        margin-top: 10px;
        height: 80px;
    }
`;

const NavToggle = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 6px;

    @media (max-width: 768px) {
        display: block;
        color: #202124;
        margin-left: 180px; /* Keep the toggle aligned to the right of the logo */
    }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
    display: flex;
    justify-content: space-around;
    margin: 8px 4em;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        margin: 0;
        max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
    }
`;

const StyledLink = styled(NavLink)`
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5rem;
    text-decoration: none;
    color: #202124CF;
    text-shadow: 0px 0px 0 #202124CF;
    padding-bottom: 10px;

    &:hover {
        text-shadow: 0.5px 0.5px 0 #202124CF;
        transition: all 0.5s;
    }

    &.active {
        text-shadow: 0px 1px 1px #202124CF;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        padding: 10px 0;
        border-bottom: 1px solid #e0e0e0;
        width: 100%;
    }
`;

const ActiveUnderline = styled.div<{
    $width?: number;
    $left?: number;
}>`
    background-color: ${({ $width, $left }) => ($width && $left ? "black" : "transparent")};
    position: absolute;
    bottom: 0;
    left: ${({ $left }) => $left ?? 0}px;
    width: ${({ $width }) => $width ?? 0}px;
    height: 2px;
    transition: all 0.3s ease-out;

    @media (max-width: 768px) {
        display: none;
    }
`;

const FooterContainer = styled.div`
    background-color: #f5f7f8;
    padding: 40px 80px;

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #0a142f7d;

    b {
        color: #0a142f;
    }

    @media (max-width: 768px) {
        padding: 20px;
        font-size: 14px;
    }
`;

const navLinkList = [
    {
        title: "Operational Business",
        url: "/operational-business",
    },
    {
        title: "Investment Management",
        url: "/investment-management",
    },
    {
        title: "Real Asset",
        url: "/real-asset",
    },
    {
        title: "About",
        url: "/about",
    },
];

export function Layout() {
    const tabsRef = useRef<(HTMLElement | null)[]>([]);
    const loc = useLocation();
    const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const index = navLinkList.findIndex((o) => o.url === loc.pathname.toLowerCase());
        setActiveTabIndex(index !== -1 ? index : null);
    }, [loc.pathname]);

    useEffect(() => {
        if (activeTabIndex === null) {
            return;
        }

        const setTabPosition = () => {
            window.scrollTo(0, 0);
            const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
            if (currentTab) {
                setTabUnderlineLeft(currentTab.offsetLeft);
                setTabUnderlineWidth(currentTab.clientWidth);
            }
        };

        setTabPosition();
    }, [activeTabIndex]);

    useLayoutEffect(() => {
        const updateSize = () => {
            if (activeTabIndex == null) {
                return;
            }
            const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
            if (currentTab) {
                setTabUnderlineLeft(currentTab.offsetLeft);
                setTabUnderlineWidth(currentTab.clientWidth);
            }
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, [activeTabIndex]);

    return (
<div style={{ overflowX: 'hidden' }}>
    <HeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <NavLink
                to="/"
                onClick={() => {
                    setTabUnderlineLeft(0);
                    setTabUnderlineWidth(0);
                    setIsNavOpen(false);
                }}
                style={{
                    display: 'inline-block',
                }}
            >
                <Logo src="logo.png" alt="Athor Privatstiftung" />
            </NavLink>
            <NavToggle onClick={() => setIsNavOpen((prev) => !prev)}>
                {isNavOpen ? "✖" : "☰"}
            </NavToggle>
        </div>
        <Nav isOpen={isNavOpen}>
            {navLinkList.map((o, index) => (
                <StyledLink
                    key={index}
                    ref={(el) => (tabsRef.current[index] = el)}
                    onClick={() => {
                        setActiveTabIndex(index);
                        setIsNavOpen(false);
                    }}
                    to={o.url}
                >
                    {o.title}
                </StyledLink>
            ))}
        </Nav>
        <ActiveUnderline $left={tabUnderlineLeft} $width={tabUnderlineWidth} />
    </HeaderContainer>

    <Outlet />

    <FooterContainer>
        <p>
            Nothing on this website is intended as, or constitutes, marketing of any fund in the United Kingdom or any member state of the European Economic Area
            within the meaning of the Directive 2011/61/EU on Alternative Investment Fund Managers.<br />
            <br />

            None of the information on this website constitutes a financial promotion within the meaning of section 21 of the UK Financial Service and Markets
            Act 2000 and, in any event, such information is exclusively intended for, and directed only at, persons who meet the definition of a professional client
            under Article 2(1)(8) of Regulation (EU) No 600/2014 on markets in financial instruments as it forms part of the laws of England and Wales by virtue of
            the European Union (Withdrawal) Act 2018 and as amended, and who are: (i) Investment Professionals within the meaning of Article 19 of the Financial
            Services and Markets Act 2000 (Financial Promotion) Order 2005 (the "FPO"); (ii) High Net Worth Companies and certain other entities falling within
            Article 49 of the FPO; or (iii) any other persons to whom such a financial promotion may be lawfully made.
        </p>
        <div>
            <NavLink to="/impressum"><b>Impressum</b></NavLink>
        </div>
        <br />
        <br />
        <div style={{ margin: "24px 0", color: "#0a142f", fontWeight: 400 }}>
            © 2024 Athor Holding GmbH & Co KG. All rights reserved.
        </div>
    </FooterContainer>
</div>

    );
}
