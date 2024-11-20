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
    width: 50vw;
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
    }
`;

const HeroHeader = styled.h1`
    text-align: right;
    color: white;
    font-weight: 500;
    font-size: clamp(2rem, 4vw, 3.5rem); /* Dynamic scaling for text */
    margin: 10px 0;
    text-shadow: -3px 10px 40px black;

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
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 300;
    margin: 10px 0;
    text-shadow: -3px 10px 40px black;

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
    padding: 100px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px; /* Add spacing between items */
    border-bottom: 1px solid #ababab;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack elements on smaller screens */
        padding: 40px 20px;
        text-align: center; /* Center-align content for mobile */
    }
`;

const ContentTitle = styled.h2`
    color: #202124;
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 500;
    margin: 10px 0;

    @media (max-width: 768px) {
        font-size: clamp(1.2rem, 4vw, 1.6rem);
    }
`;

const ContentText = styled.p`
    color: #202124cf;
    font-family: 'Spline Sans', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    font-weight: 300;
    width: 40vw;

    @media (max-width: 768px) {
                width: 100%; /* Full width for smaller screens */
        font-size: 14px; /* Slightly smaller font size */
    }
`;

const ImageContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;

    img {
        max-width: 100%;
        height: auto;
        width: 200px; /* Default width for images */
    }

    @media (max-width: 768px) {
        flex-direction: column; /* Stack images for smaller screens */
        gap: 10px;

        img {
            width: 80%; /* Adjust image size for mobile */
            max-width: 300px;
        }
    }
`;



export function OperationBusiness() {
    return (
        <div>
            <Container data-aos="fade-up">
                <video autoPlay muted loop id="video">
                    <source src="/operational-business.mp4" type="video/mp4" />
                </video>
                <HeroContentContainer>
                    <HeroHeader>
                        Expertise in Pan-Eurasian<br />
                        Trading and Trade-Finance
                    </HeroHeader>
                    <HeroSubheader>
                        Our international trading structure combines<br />
                        years of experience within the trade,<br />
                        distribution and financing of commodities<br />
                        and spare parts
                    </HeroSubheader>
                </HeroContentContainer>
            </Container>
            <ContentContainer data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-in">
                <div>
                    <ContentTitle>International Trade</ContentTitle>
                    <ContentText>
                        With more than 25 years of international trading experience in commodities, raw
                        materials, automotive and spare parts, our group provides a comprehensive
                        solution for purchasing, distribution and logistics to and from Europe.
                    </ContentText>
                </div>
                <ImageContainer>
                    <img src="/opbus/rmz.png" width={200} alt="RMZ - Austria" />
                    <img src="/opbus/powerline.png" width={400} alt="Powerline" />
                </ImageContainer>
            </ContentContainer>
            <ContentContainer data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-in">
                <ImageContainer>
                    <img src="/opbus/fininvest.png" width={400} alt="Financial Investment Group" />
                </ImageContainer>
                <div>
                    <ContentTitle>Trade Finance</ContentTitle>
                    <ContentText>
                        Through our extensive relationships with banks, financial service providers, and
                        relevant funding partners, we provide flexible solutions for trade-related
                        financing needs.
                    </ContentText>
                </div>
            </ContentContainer>
            <ContentContainer data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-in">
                <div>
                    <ContentTitle>Trade Advisory</ContentTitle>
                    <ContentText>
                        Our Athor Trade Advisory engages in cooperations with international partners on
                        an advisory basis addressing issues such as country-specific logistics, product
                        homologations, and distributions.
                    </ContentText>
                </div>
                <ImageContainer>
                    <img src="/opbus/athorhandel.png" width={270} alt="Athor Handel" />
                    <img src="/opbus/athorswitz.png" width={270} alt="Athor Switzerland" />
                </ImageContainer>
            </ContentContainer>
        </div>
    );
}
