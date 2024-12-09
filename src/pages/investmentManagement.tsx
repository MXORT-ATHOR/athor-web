import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 170px);
    position: relative;

    img, video {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        height: 100vh; /* Reduce height on smaller screens */
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
    align-items: center;
    overflow: hidden;
    text-align: center;

    @media (max-width: 768px) {
        width: 90vw;
        padding: 16px;
        align-items: center;
        text-align: center;
    }
`;

const HeroHeader = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 4vw;
    margin: 10px 0;
    text-align: center;
    text-shadow: -3px 10px 40px rgba(0, 0, 0, 0.7);
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
    color: white;
    font-family: 'Spline Sans', sans-serif;
    font-size: 2vw;
    font-weight: 400;
    margin: 10px 0;
    text-align: center;
    text-shadow: -3px 10px 20px rgba(0, 0, 0, 0.5);
    max-width: 50vw;
    @media (max-width: 768px) {
        font-size: 5vw;
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
    padding: 80px 80px;
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;

    > img {
      width: 40vw;
      max-width: 600px;
      aspect-ratio: 6 / 4;
      border-radius: 12px;
    }

    @media (max-width: 768px) {
    > img {
      width: 60vw;
      margin-top: 20px;
      aspect-ratio: 2 / 1;
      border-radius: 12px;
    }
        flex-direction: row; /* Ensure left-right layout on smaller screens */
        justify-content: center;
        padding: 10px 10px 10px 10px;
        text-align: left;

        > img {
            order: 1; /* Ensure the image stays on the left */
            margin-right: 20px;
        }

        > div {
            order: 2; /* Ensure the text stays on the right */
        }
    }
`;

const ContentTitle = styled.h2`
    color: #202124;
    font-size: 2.5vw;
    font-weight: 500;
    margin: 10px 0;
    @media (max-width: 768px) {
        font-size: 26px; /* Smaller font size for smaller screens */
    }
`;

const ContentText = styled.p`
    color: #202124CF;
    font-family: 'Spline Sans', sans-serif;
    font-size: 1.2vw;
    font-weight: 300;
    max-width: 30vw;

    @media (max-width: 768px) {
        width: 100%; /* Full width for smaller screens */
        font-size: 13px; /* Slightly smaller font size */
        max-width: 80vw;

    }
`;

const IconContainer = styled.div`
    display: flex;
    gap: 16px;

    img {
        height: 80px;
        object-fit: contain;
    }
        
`;

export function InvestmentManagement() {
    return (
        <div>
             <Container data-aos="fade-up">
                <video src="/invma/hero.mp4" autoPlay loop muted />
                <HeroContentContainer>
                    <HeroHeader>
                        Managing a Global<br/>
                        Multi-Asset Portfolio
                    </HeroHeader>
                    <HeroSubheader>
                        Our five distinct hubs comprise the management of a diversified portfolio across all major asset classes with a clear regional focus in Europe and Asia.
                    </HeroSubheader>
                </HeroContentContainer>
            </Container>
            
            <ContentContainer data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in">
                <img src={"/invma/austria.png"} alt="Austria" />
                <div>
                    <ContentTitle>Austria</ContentTitle>
                    <ContentText>
                        Our Austrian Headquarters, with offices in both Vienna and Linz, is the center of our trading activity and the group's largest investment fund with a focus on European Public and Private Equities.
                    </ContentText>
                    <IconContainer>
                        <img src="athor/holding.png" alt="Holding" />
                        <img src="athor/management.png" alt="Management" />
                    </IconContainer>
                </div>
            </ContentContainer>

            <ContentContainer data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in">
                <img src={"/invma/sg.png"} alt="Singapore" />
                <div>
                    <ContentTitle>Singapore</ContentTitle>
                    <ContentText>
                        Our Singapore branch was created with the intention of diversifying our portfolio across Asia-Pacific, focusing on equity investments in both developed and emerging markets.
                    </ContentText>
                    <IconContainer>
                        <img src="athor/sglim.png" alt="SG Lim" />
                    </IconContainer>
                </div>
            </ContentContainer>

            <ContentContainer data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in">
                <img src={"/invma/switz.png"} alt="Switzerland" />
                <div>
                    <ContentTitle>Switzerland</ContentTitle>
                    <ContentText>
                        Switzerland, with its internationally renowned image of stability and financial security, serves as a strategic safe haven for the Athor Group’s investments, particularly in currency and commodity markets.
                    </ContentText>
                    <IconContainer>
                        <img src="athor/switz.png" alt="Switzerland Icon" />
                    </IconContainer>
                </div>
            </ContentContainer>

            <ContentContainer data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in">
                <img src={"/invma/spain.png"} alt="Spain" />
                <div>
                    <ContentTitle>Spain</ContentTitle>
                    <ContentText>
                        As Europe's frontier market, our Spanish office not only supports our operational business but represents a significant portion of Athor Group's real estate investments.
                    </ContentText>
                    <IconContainer>
                        <img src="athor/real.png" alt="Real Estate" />
                    </IconContainer>
                </div>
            </ContentContainer>

            <ContentContainer data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in">
                <img src={"/invma/turkey.png"} alt="Turkey" />
                <div>
                    <ContentTitle>Turkey</ContentTitle>
                    <ContentText>
                        Acting as a bridge between Europe and Asia, our Turkish subsidiary handles various trade-related activities such as logistics and distribution across continents.
                    </ContentText>
                    <IconContainer>
                        <img src="athor/nova.png" alt="Nova" />
                    </IconContainer>
                </div>
            </ContentContainer>
        </div>
    );
}
