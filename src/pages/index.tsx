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
    height: 28vh; /* Increase height */
    margin: 0; /* Remove unnecessary margins */
    padding: 0; /* Remove unnecessary padding */
    video {
        height: 100%; /* Ensure video fully fills */
    }
    HeroContentContainer {
        display: none; /* Remove empty container if unused */
    }
}

`;


const HeroContentContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 70vw;
    padding: 24px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 90vw;
        padding: 16px 40px;
    }
`;

const HeroHeader = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 5vw;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;

    @media (max-width: 768px) {
        font-size: 7vw;
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
        font-size: 5vw;
    }
`;

const ContentContainer = styled.div`
    padding: 180px 80px;
    font-size: 36px;

    @media (max-width: 768px) {
        padding: 40px 20px;
        font-size: 14px;
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
    aspect-ratio: 3 / 2; /* Default aspect ratio for desktop */
    flex-shrink: 0; /* Prevent shrinking when inline */
    width: calc(33.33% - 16px); /* Ensure three items fit inline with a gap */

    h4 {
        color: white;
        font-family: "EB Garamond", serif;
        font-size: 26px;
        font-weight: 500;
        margin: 10px 30px;
        text-shadow: -3px 10px 40px black;
    }

    @media (max-width: 768px) {
        aspect-ratio: 1 / 1; /* Square aspect ratio for mobile */
        width: calc(100% / 3 - 16px); /* Fit three images inline */
        h4 {
            font-size: 20px;
            margin: 10px 10px;
        }
    }
`;


export function Home() {
    return (
        <div>
            <Container data-aos="fade-up">
                <video autoPlay muted loop id="video">
                    <source src="/homas/home.mp4" type="video/mp4" />
                </video>
                <HeroContentContainer>
                </HeroContentContainer>
            </Container>

            <ContentContainer
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-easing="ease-in"
            >
                <p
                    style={{ fontWeight: "400", textAlign: "center"}}
                >
                    With expertise in international trade as the pillar of our business, the Athor Group positions itself as a multi-regional investment office working within our close network of trusted business partners in Europe and Asia Pacific
                </p>
            </ContentContainer>

            <div style={{backgroundColor: "#ababab", height: 1, margin: "0 80px"}}></div>

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
