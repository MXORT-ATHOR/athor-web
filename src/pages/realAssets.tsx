import styled from "styled-components";

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
        height: 100vh; /* Adjust height for mobile */
    }
`;

const HeroContentContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    overflow: hidden;
    background: url("/reas/hero.png");
    background-position: center;
    background-size: cover;

    @media (max-width: 768px) {
        padding: 16px;
        align-items: center;
        background-position: center;
    }
`;

const HeroHeader = styled.h1`
    text-align: right;
    color: white;
    font-weight: 500;
    font-size: 4vw;
    margin: 10px 0;
    text-shadow: 
         0px  0px 15px rgba(0, 0, 0, 0.7),
         0px  0px 30px rgba(0, 0, 0, 0.5);

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
    text-align: right;
    color: white;
    font-family: 'Spline Sans', sans-serif;
    font-size: 2vw;
    font-weight: 300;
    margin: 10px 0;
    max-width: 40vw;
    text-shadow: 
         0px  0px 15px rgba(0, 0, 0, 0.7),
         0px  0px 35px rgba(0, 0, 0, 0.8),
         0px  0px 40px rgba(0, 0, 0, 0.9),
         0px  0px 25px rgba(0, 0, 0, 0.7),
         0px  0px 30px rgba(0, 0, 0, 0.8),
         0px  0px 45px rgba(0, 0, 0, 0.9);

    @media (max-width: 768px) {
        font-size: 5vw;
        text-align: center;
        max-width: 90%;
    }
`;

const SectionContainer = styled.div`
    position: relative;
    padding: 80px 20px; /* Adjust padding for mobile */
`;

const ContentWrapper = styled.div`
    max-width: 30vw;
    margin-bottom: 20px;
    text-align: center;
     @media (max-width: 768px) {
        margin-top: 10px;
        max-width: 50%;
    }
`;

const SectionTitle = styled.h3`
    font-size: 2.6vw;
    font-weight: 600;
    color: #4D4D4D;
`;

const SectionText = styled.p`
    font-weight: 400;
    font-size: 1.6vw;
    font-family: 'Spline Sans', sans-serif;
    color: #717171;
     @media (max-width: 768px) {
        font-size: 2vw;

    }
`;
const Image = styled.img`
    height: 90px;

    
`;
const MapContainer = styled.div`
    background: url("/reas/map.png");
    aspect-ratio: 2 / 1;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    right: -30vw;
    top: 3vw;
    bottom: -20vw;
    @media (max-width: 768px) {
    top: 3vw;
    bottom: -20vw;

        height: 60%; /* Reduce size on smaller screens */
        margin-right: -30px; /* Add space to prevent overlap */
    }
`;

export function RealAsset() {
    return (
        <div>
            <Container data-aos="fade-up">
                <HeroContentContainer>
                    <HeroHeader>
                        Real Assets as a safe haven<br />
                        for generations
                    </HeroHeader>
                    <HeroSubheader>
                        Our Investment Philosophy places great importance on the areas of Real Estate, Commodities and Alternative Assets as a key factor for our portfolio’s longevity
                    </HeroSubheader>
                </HeroContentContainer>
            </Container>

            <SectionContainer>
                <ContentWrapper>
                    <SectionTitle
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in"
                        data-aos-delay="100"
                    >
                        Residential & Commercial <br />
                        Real Estate
                    </SectionTitle>
                    <SectionText
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in"
                        data-aos-delay="200"
                    >
                        The core of our residential real estate operations lies within the three key areas: the DACH region, the Iberian peninsula and the Baltics
                        <br />
                        <br />
                        Within these regions Athor Real makes investments in the residential space of some of Europe's most influential metropolitan areas.  Several subsidiaries within the group are focused on new project development, renovations, and management of residential and commercial properties.
                    </SectionText>
                    <Image
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in"
                        data-aos-delay="100"
                        src="/athor/real.png"
                        alt="athor real"
                    />
                </ContentWrapper>
                <MapContainer data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in" />
            </SectionContainer>

            <div style={{ height: 180 }}></div>
        </div>
    );
}
