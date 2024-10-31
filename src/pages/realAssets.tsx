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
    background: url("/reas/hero.png");
    background-position: center;
    background-size: cover;

`
const HeroHeader = styled.h1`
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 4vw;
    margin: 10px 0;
    /* Dense layered shadow for background effect */
    text-shadow: 
         0px  0px 15px rgba(0, 0, 0, 0.7),
         0px  0px 30px rgba(0, 0, 0, 0.5);
`;

const HeroSubheader = styled.h2`
    text-align: center;
    color: white;
    font-family: 'Spline Sans', sans-serif;
    font-size: 2vw;
    font-weight: 300;
    margin: 10px 0;
    max-width: 40vw;
    /* Dense layered shadow for background effect */
    text-shadow: 
         0px  0px 15px rgba(0, 0, 0, 0.7),
         0px  0px 35px rgba(0, 0, 0, 0.8),
         0px  0px 40px rgba(0, 0, 0, 0.9),
         0px  0px 25px rgba(0, 0, 0, 0.7),
         0px  0px 30px rgba(0, 0, 0, 0.8),
         0px  0px 45px rgba(0, 0, 0, 0.9);
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
            <div
                style={{
                    position: "relative",
                    padding: 80
                }}
            >
                <div
                    style={{
                        maxWidth: "30vw"
                    }}
                >
                    <h3
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in"
                        data-aos-delay="100"
                        style={{
                            fontSize: '2.6vw',
                            fontWeight: "600",
                            color: '#4D4D4D'
                        }}
                    >
                        Residential & Commercial <br />
                        Real Estate
                    </h3>
                    <p
                        style={{
                            fontWeight: '400',
                            fontSize: '1.6vw',
                            font: 'Spline Sans',
                            color: '#717171'
                        }}
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in"
                        data-aos-delay="200"
                    >
                    The core of our residential real estate operations lies within the three key areas: the DACH region, the Iberian peninsula and the Baltics
                    <br />
                    <br />
                    Within these regions Athor Real makes investments in the residential space of some of Europe's most influential metropolitan areas.  Several subsidiaries within the group are focused on new project development, renovations, and management of residential and commercial properties.
                    </p>
                    <br />
                    <br />
                    <img
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in"
                    data-aos-delay="100"
                    height={90} src="/athor/real.png" alt="athor real" />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in"
                    style={{
                        background: 'url("/reas/map.png")',
                        aspectRatio: "2 / 1",
                        height: "100%",
                        position: "absolute",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        right: "-30vw",
                        top: "3vw",
                        bottom: "-20vw",
                    }}
                />
            </div>
            <div style={{height: 180}}></div>
        </div>
    );
}