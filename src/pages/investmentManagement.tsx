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

`

const HeroHeader = styled.h1`
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 4vw;
    margin: 10px 0;
    text-shadow: -3px 10px 40px black;
`

const HeroSubheader = styled.h2`
    text-align: center;
    color: white;
    font-family: Spline Sans;
    font-size: 2vw;
    font-weight: 400;
    margin: 10px 0;
    text-shadow: -3px 10px 20px black;
    max-width: 50vw;

`

const ContentContainer = styled.div`
    padding: 80px 80px;
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: start;

    > img {
      width: 40vw;
      aspect-ratio: 6 / 4;
    }
`

const ContentTitle = styled.h2`
    color: #202124;
    font-size: 50px;
    font-weight: 500;
    margin: 10px 0;

`

const ContentText = styled.p`
    color: #202124CF;
    font-family: Spline Sans;
    font-size: 20px;
    font-weight: 300;

    width: 30vw;
`

export function InvestmentManagement() {
    return (
        <div>
            <Container data-aos="fade-up">
                <video autoPlay muted loop id="video">
                    <source src="/invma/vid.mp4" type="video/mp4" />
                </video>
                <HeroContentContainer>
                    <HeroHeader>
                    Managing a Global<br/>
                    Multi-Asset Portfolio
                    </HeroHeader>
                    <HeroSubheader>
                      Our five distinct hubs comprise the management of a diversified portfolio across all major asset classes with a clear regional focus in Europe and Asia 
                    </HeroSubheader>
                </HeroContentContainer>
            </Container>
            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-easing="ease-in"
            >
                <img src={"/invma/austria.png"} alt="rmz - austria" />
                <div>
                    <ContentTitle>
                        Austria
                    </ContentTitle>
                    <ContentText>
                      Our Austrian Headquarter with offices in both Vienna and Linz is the center of our trading activity and the group's largest investment fund with a focus on European Public and Private Equities
                    </ContentText>
                    <br />
                    <br />
                    <div style={{
                      display: 'flex',
                      gap: 16
                    }}>
                      <img src="athor/holding.png" height={100} alt="holding" />
                      <img src="athor/management.png" height={80} alt="management" />
                    </div>
                </div>
            </ContentContainer>
            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in"
            >
                <img src={"/invma/sg.png"} alt="rmz - singapore" />
                <div>
                    <ContentTitle>
                        Singapore
                    </ContentTitle>
                    <ContentText>
                        Our Singapore branch was created with the intention of diversifying our portfolio across Asia-Pacific focusing on Equity investments in both developed and emerging markets
                    </ContentText>
                    <br />
                    <br />
                    <div style={{
                      display: 'flex',
                      gap: 16
                    }}>
                      <img src="athor/sglim.png" height={80} alt="sg lim" />
                    </div>
                </div>
            </ContentContainer>
            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in"
            >
                <img src={"/invma/switz.png"} alt="rmz - switzerland" />
                <div>
                    <ContentTitle>
                        Switzerland
                    </ContentTitle>
                    <ContentText>
                        Switzerland with its internationally renown image of stability and financial security serves as a strategic safe haven for the Athor Group’s investments, especially with regards to currency and commodity markets
                    </ContentText>
                    <br />
                    <br />
                    <div style={{
                      display: 'flex',
                      gap: 16
                    }}>
                      <img src="athor/switz.png" height={80} alt="holding" />
                    </div>
                </div>
            </ContentContainer>
            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in"
            >
                <img src={"/invma/spain.png"} alt="rmz - spain" />
                <div>
                    <ContentTitle>
                        Spain
                    </ContentTitle>
                    <ContentText>
                    As Europe's frontier market, our Spanish office not only takes on a supporting role within our operational business but represents a significant proportion of Athor Group's real estate investments
                    </ContentText>
                    <br />
                    <br />
                    <div style={{
                      display: 'flex',
                      gap: 16
                    }}>
                      <img src="athor/real.png" height={80} alt="real" />
                    </div>
                </div>
            </ContentContainer>
            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in"
            >
                <img src={"/invma/turkey.png"} alt="rmz - turkey" />
                <div>
                    <ContentTitle>
                        Turkey
                    </ContentTitle>
                    <ContentText>
                    Acting as a bridge between Europe and Asia, our Turkish subsidiary deals with a variety of trade related activities such as logistics, distribution across continents
                    </ContentText>
                    <br />
                    <br />
                    <div style={{
                      display: 'flex',
                      gap: 16
                    }}>
                      <img src="athor/nova.png" height={80} alt="nova" />
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
}