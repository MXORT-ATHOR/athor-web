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
`

const Logo = styled.img`
    margin-top: 20px;
    height: 120px;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    margin: 8px 4em;
`

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
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }

    &.active {
        text-shadow: 0px 1px 1px #202124CF;
        /* border-bottom: 2px solid black; */
    }
`

const ActiveUnderline = styled.div<{
    $width?: number;
    $left?: number;
}>`
    background-color: ${props => props.$width && props.$left ? "black" : "transparent"};
    position: relative;
    width: ${props => props.$width ?? 0}px;
    height: 2px;
    left: ${props => props.$left ?? 0}px;

    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s ease-out;
`

const FooterContainer = styled.div`
    background-color: #F5F7F8;
    padding: 76px 80px 200px 80px;

    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    color: #0a142f7d;

    b {
        color: #0a142f;
    }
`

const navLinkList = [
    {
        title: "Operational Business",
        url: "/operational-business"
    },
    {
        title: "Investment Management",
        url: "/investment-management"
    },
    {
        title: "Real Asset",
        url: "/real-asset"
    },
    {
        title: "About",
        url: "/about"
    },
]

export function Layout() {
    const tabsRef = useRef<(HTMLElement | null)[]>([]);
    const loc = useLocation();
    const [activeTabIndex, setActiveTabIndex] = useState<number>(-1);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    useEffect(() => {
        setActiveTabIndex(navLinkList.findIndex((o) => o.url === loc.pathname.toLowerCase()))
    }, [loc.pathname]);

    useEffect(() => {
        if (activeTabIndex === -1) {
            document.title = "Athor Privatstiftung"
            return;
        }
        console.log(activeTabIndex)
        document.title = `${navLinkList[activeTabIndex].title} | Athor Privatstiftung`

        const setTabPosition = () => {
            window.scrollTo(0,0)
            const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        };

        setTabPosition();
    }, [activeTabIndex]);

    useLayoutEffect(() => {
        const updateSize = () => {
            if (activeTabIndex === -1) {
                return
            }
            const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [activeTabIndex])

    return (<div>
        <HeaderContainer>
            <NavLink to="/" onClick={() => {
                setTabUnderlineLeft(-1)
                setTabUnderlineWidth(0)
            }}>
                <Logo src="logo.png" alt="Athor Privatstiftung" />
            </NavLink>
            <Nav>
                {navLinkList.map((o, index) => (
                    <StyledLink
                        key={index}
                        ref={(el) => (tabsRef.current[index] = el)}
                        onClick={() => setActiveTabIndex(index)}
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
                within the meaning of the Directive 2011/61/EU on Alternative Investment Fund Managers.<br/>
                <br/>
                
                None of the information on this website constitutes a financial promotion within the meaning of section 21 of the UK Financial Service and Markets Act 2000
                and, in any event, such information is exclusively intended for, and directed only at, persons who meet the definition of a professional client under 
                Article 2(1)(8) of Regulation (EU) No 600/2014 on markets in financial instruments as it forms part of the laws of England and Wales by virtue of the 
                European Union (Withdrawal) Act 2018 and as amended, and who are: (i) Investment Professionals within the meaning of Article 19 of the Financial Services
                and Markets Act 2000 (Financial Promotion) Order 2005 (the "FPO"); (ii) High Net Worth Companies and certain other entities falling within 
                Article 49 of the FPO; or (iii) any other persons to whom such a financial promotion may be lawfully made.
            </p>
            <div>
                <NavLink to="/impressum" onClick={() => {
                    window.scrollTo(0,0)
                    setTabUnderlineLeft(-1)
                    setTabUnderlineWidth(0)
                    setActiveTabIndex(-1)
                }}>
                    <b>Impressum</b>
                </NavLink>
            </div>
            <br/>
            <br/>
            <div style={{margin: "24px 0", color: "#0a142f", fontWeight: 400}}>
                © 2024 Athor Holding GmbH & Co KG. All rights reserved. 
            </div>
        </FooterContainer>
      </div>)
}