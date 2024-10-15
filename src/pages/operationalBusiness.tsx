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
    width: 50vw;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    overflow: hidden;

`

const HeroHeader = styled.h1`
    text-align: right;
    color: white;
    font-weight: 500;
    font-size: 4vw;
    margin: 10px 0;
    text-shadow: -3px 10px 40px black;
`

const HeroSubheader = styled.h2`
    text-align: right;
    color: white;
    font-family: Spline Sans;
    font-size: 2vw;
    font-weight: 300;
    margin: 10px 0;
    text-shadow: -3px 10px 40px black;

`

const ContentContainer = styled.div`
    padding: 180px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ababab;
`

const ContentTitle = styled.h2`
    color: black;
    font-family: Inter;
    font-size: 60px;
    font-weight: 700;
    margin: 10px 0;

`

const ContentText = styled.p`
    color: black;
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    font-height: 3;

`

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
                        Our international trading structure combines<br/>
                        years of experience within the trade,<br/>
                        distribution and financing of commodities<br/>
                        and spare parts
                    </HeroSubheader>
                </HeroContentContainer>
            </Container>
            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-easing="ease-in"
            >
                <div>
                    <ContentTitle>
                        International Trade
                    </ContentTitle>
                    <ContentText>
                        With more than 25 years of international trading experience in commodities, raw materials, automotive and spare parts, our group provides a comprehensive solution for purchasing, distribution and logistics to and from Europe 
                    </ContentText>
                </div>
                <div style={{marginLeft: 100}}>
                    <img src={"/opbus/rmz.png"} width={200} alt="rmz - austria" />
                </div>
                <div style={{marginLeft: 40}}>
                    <img src={"/opbus/powerline.png"} width={400} alt="powerline" />
                </div>
            </ContentContainer>
            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-easing="ease-in"
            >
                <div style={{marginRight: 200, padding: 40}}>
                    <img src={"/opbus/fininvest.png"} width={400} alt="financial investment group" />
                </div>
                <div>
                    <ContentTitle>
                        Trade Finance
                    </ContentTitle>
                    <ContentText>
                    Through our extensive relationships with banks, financial service providers and relevant funding partners we provide flexible solutions for trade related financing needs 
                    </ContentText>
                </div>
            </ContentContainer>
            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-easing="ease-in"
            >
                <div>
                    <ContentTitle>
                        Trade Advisory
                    </ContentTitle>
                    <ContentText>
                        Our Athor Trade Advisory engages in cooperations with international partners on an advisory basis addressing issues such as country specific logistics, product homologations and distributions
                    </ContentText>
                </div>
                <div style={{marginLeft: 90}}>
                    <img src={"/opbus/athorhandel.png"} width={270} alt="rmz - austria" />
                </div>
                <div style={{marginLeft: 90}}>
                    <img src={"/opbus/athorswitz.png"} width={270} alt="powerline" />
                </div>
            </ContentContainer>
        </div>
    );
}