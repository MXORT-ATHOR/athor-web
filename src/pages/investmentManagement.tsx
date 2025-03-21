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
        height: 60vh; /* Full height for phones */
        margin: 0; /* Remove unnecessary margins */
        padding: 0; /* Remove unnecessary padding */
        
        video {
            height: 100%; /* Ensure video fully fills */
        }
    }
`;

const HeroContentContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50vw;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        width: 90vw; /* Expand width for smaller screens */
        padding: 16px;
        align-items: center; /* Center-align for mobile */
        text-align: center;
    }
`;

const HeroHeader = styled.h1`
    text-align: left;
    color: white;
    font-weight: 500;
    font-size: clamp(2rem, 4vw, 3.5rem); /* Dynamic scaling for text */
    margin: 10px 0;
    text-shadow: 
         0px  0px 15px rgba(0, 0, 0, 0.7),
         0px  0px 35px rgba(0, 0, 0, 0.8),
         0px  0px 40px rgba(0, 0, 0, 0.9),
         0px  0px 25px rgba(0, 0, 0, 0.7),
         0px  0px 30px rgba(0, 0, 0, 0.8),
         0px  0px 45px rgba(0, 0, 0, 0.9);

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
    font-family: 'Spline Sans', sans-serif;
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 300;
    margin: 10px 0;
    text-shadow: 
         0px  0px 15px rgba(0, 0, 0, 0.7),
         0px  0px 35px rgba(0, 0, 0, 0.8),
         0px  0px 40px rgba(0, 0, 0, 0.9),
         0px  0px 25px rgba(0, 0, 0, 0.7),
         0px  0px 30px rgba(0, 0, 0, 0.8),
         0px  0px 45px rgba(0, 0, 0, 0.9);

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
        justify-content: center; /* Center the content */
        flex-direction: column; /* Stack content vertically */
        padding: 20px;
        
        > img {
            width: 80vw; /* Increase image width on mobile */
            aspect-ratio: 2 / 1;
            border-radius: 12px;
            margin-bottom: 20px; /* Add margin between image and text */
        }
    }
`;

const ContentTitle = styled.h2`
    color: #202124;
    font-size: 2.5vw;
    font-weight: 500;
    margin: 10px 0;
    text-align: center; /* Center align the title */
    
    @media (max-width: 768px) {
        font-size: 26px; /* Increase font size for mobile */
        text-align: center; /* Center-align for mobile */
    }
`;

const ContentText = styled.p`
    color: #202124CF;
    font-family: 'Spline Sans', sans-serif;
    font-size: 1.2vw;
    font-weight: 300;
    max-width: 30vw;
    text-align: center; /* Center-align the text */

    @media (max-width: 768px) {
        font-size: 18px; /* Increase font size for mobile */
        max-width: 80vw;
    }
`;

const IconContainer = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center; /* Center-align the icons */
    
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
                        Managing a Global<br />
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
                        Our Singapore branch was created with the intention of diversifying our operational business within the international trading space in both developed and emerging markets.
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
