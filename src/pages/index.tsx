import { useState, useEffect } from "react";
import styled from "styled-components";

const heroData = [
    {
        header: "Expertise in Pan-Eurasian Trading and Trade-Finance",
        subheader:
            "Our international trading structure combines years of experience within the trade, distribution, and financing of commodities.",
    },
    {
        header: "Managing a Global Multi-Asset Portfolio",
        subheader:
            "Our four distinct hubs comprise the management of a diversified portfolio across all major asset classes with a clear regional focus in Europe and Asia.",
    },
    {
        header: "Real Assets as a Safe Haven for Generations",
        subheader:
            "Our Investment Philosophy places great importance on the areas of Real Estate, Commodities, and Alternative Assets as a key factor for our portfolio’s longevity.",
    },
];

const Container = styled.div`
    width: 100vw;
    position: relative;
    height: calc(100vh - 170px);

    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        height: 60vh;
        margin: 0;
        padding: 0;
        video {
            height: 100%;
        }
        HeroContentContainer {
            display: none;
        }
    }
`;

const HeroContentContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60vw;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 768px) {
        width: 90vw; /* Expand width for smaller screens */
        padding: 16px;
        align-items: center; /* Center-align for mobile */
        text-align: center;
    }`

const HeroHeader = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 5vw;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;

    @media (max-width: 768px) {
        font-size: 8vw;
        text-align: center;
        text-shadow: 
         0px  0px 15px rgba(0, 0, 0, 0.7),
         0px  0px 35px rgba(0, 0, 0, 0.8),
         0px  0px 40px rgba(0, 0, 0, 0.9),
         0px  0px 25px rgba(0, 0, 0, 0.7),
         0px  0px 30px rgba(0, 0, 0, 0.8),
         0px  0px 45px rgba(0, 0, 0, 0.9);
    }
`;

const HeroSubheader = styled.h2`
    text-align: left;
    color: white;
    font-family: Spline Sans;
    font-size: 3vw;
    font-weight: 300;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;

   @media (max-width: 768px) {
        font-size: 6vw;
        text-align: center;
        text-shadow: 
         0px  0px 15px rgba(0, 0, 0, 0.7),
         0px  0px 35px rgba(0, 0, 0, 0.8),
         0px  0px 40px rgba(0, 0, 0, 0.9),
         0px  0px 25px rgba(0, 0, 0, 0.7),
         0px  0px 30px rgba(0, 0, 0, 0.8),
         0px  0px 45px rgba(0, 0, 0, 0.9);
    }
`;

const ContentContainer = styled.div`
    padding: 180px 80px;
    font-size: 36px;

    @media (max-width: 768px) {
        padding: 40px 20px;
        font-size: 5vw;
    }
`;

const ContentTitle = styled.h2`
    color: white;
    font-family: "EB Garamond", serif;
    font-size: 60px;
    font-weight: 600;
    margin: 10px 80px;
    text-shadow: -3px 10px 40px black;

    @media (max-width: 768px) {
        font-size: 40px;
        margin: 10px 20px;
    }
`;

const ImageCountry = styled.div<{
    imgUrl: string;
}>`
    background: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: center;
    aspect-ratio: 3 / 2;
    flex-shrink: 0;
    width: calc(33.33% - 16px);

    h4 {
        color: white;
        font-family: "EB Garamond", serif;
        font-size: 26px;
        font-weight: 500;
        margin: 10px 30px;
        text-shadow: -3px 10px 40px black;
    }

    @media (max-width: 768px) {
        aspect-ratio: 1 / 1;
        width: calc(100% / 3 - 16px);
        h4 {
            font-size: 18px;
            margin: 10px 10px;
        }
    }
`;

export function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
        }, 8000); // 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Container data-aos="fade-up">
                <video autoPlay muted loop id="video">
                    <source src="/homas/home.mp4" type="video/mp4" />
                </video>
                <HeroContentContainer>
                    <div>
                        <HeroHeader>{heroData[currentIndex].header}</HeroHeader>
                        <HeroSubheader>{heroData[currentIndex].subheader}</HeroSubheader>
                    </div>
                </HeroContentContainer>
            </Container>

            <ContentContainer data-aos="fade-up">
                <p style={{ fontWeight: "400", textAlign: "center" }}>
                    With expertise in international trade as the pillar of our business, the Athor Group positions itself as a multi-regional investment office working within our close network of trusted business partners in Europe and Asia Pacific
                </p>
            </ContentContainer>

            <div style={{ backgroundColor: "#ababab", height: 1, margin: "0 80px" }}></div>

            <ContentContainer>
                <div
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in"
                    style={{
                        aspectRatio: "3 / 1",
                        background: 'url("/homas/austria.png")',
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative"
                    }}>
                    <ContentTitle style={{
                        position: "absolute",
                        bottom: 20
                    }}>Austria</ContentTitle>
                </div>
                <div style={{
                    display: "flex",
                    width: "100%",
                    gap: "24px",
                    marginTop: 24,
                    flexWrap: "wrap"
                }}>
                    <ImageCountry
                        imgUrl="/homas/spain.jpeg"
                        data-aos="fade-left"
                        data-aos-offset="100"
                        data-aos-easing="ease-in"
                    >
                        <h4>Spain</h4>
                    </ImageCountry>

                    <ImageCountry
                        imgUrl="/homas/singapore.png"
                        data-aos="fade-left"
                        data-aos-offset="100"
                        data-aos-easing="ease-in"
                        data-aos-delay="100"
                    >
                        <h4>Singapore</h4>
                    </ImageCountry>

                    <ImageCountry
                        imgUrl="/homas/switzerland.png"
                        data-aos="fade-left"
                        data-aos-offset="100"
                        data-aos-easing="ease-in"
                        data-aos-delay="200"
                    >
                        <h4>Switzerland</h4>
                    </ImageCountry>
                </div>
            </ContentContainer>
        </div>
    );
}
