import styled from "styled-components";

// Container Styles
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
        height: 100vh; /* Adjust height for smaller screens */
    }
`;

// Board Container for Trustees
const BoardContainer = styled.div`
    @media (max-width: 768px) {
        font-size: 24px; /* Adjust height for smaller screens */
    }
`;

// Hero Content Container Styles
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
        width: 90vw; /* Adjust width for mobile */
        padding: 16px;
    }
`;

// Hero Header Styles
const HeroHeader = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 5vw;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;

    @media (max-width: 768px) {
        text-align: center; /* Center-align for smaller screens */
        font-size: 9vw; /* Adjust font size for smaller screens */
    }
`;

// Hero Subheader Styles
const HeroSubheader = styled.h2`
    text-align: left;
    color: white;
    font-family: Spline Sans;
    font-size: 3vw;
    font-weight: 300;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;

    @media (max-width: 768px) {
        font-size: 6vw; /* Adjust font size for mobile */
        text-align: center; /* Center-align for smaller screens */
    }
`;

// Trustee Cards Styles
const TrusteeCard = styled.div`
    max-width: 25vw;
    text-align: center;
    flex: 1 1 100%; /* Make the items stack on smaller screens */
`;

const TrusteeName = styled.h3`
    font-size: 2vw;
    font-weight: 600;
    color: #4d4d4d;
    @media (max-width: 768px) {
        font-size: 3vw; /* Adjust font size for mobile */
    }
`;

const TrusteeDescription = styled.p`
    font-size: 1vw;
    color: #4d4d4d;
    @media (max-width: 768px) {
        font-size: 2vw; /* Adjust font size for mobile */
    }
`;

// Trustee Image Styles
const TrusteeImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

// Trustee Info Container Styles
const TrusteeInfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #f7f7f7;
    flex-direction: row;
    gap: 20px;
`;

const TrusteeDetails = styled.div`
    h3 {
        font-size: 2vw;
        font-weight: 600;
        color: #1e3a8a;
    }

    h4 {
        font-size: 1.2vw;
        color: #6b7280;
    }

    p {
        font-size: 1vw;
        color: #4d4d4d;
    }
    @media (max-width: 768px) {
    h3 {
        font-size: 4vw;
        font-weight: 600;
        color: #1e3a8a;
    }

    h4 {
        font-size: 3vw;
        color: #6b7280;
    }

    p {
        font-size: 2vw;
        color: #4d4d4d;
    }
    }
`;

// Main Component
export function About() {
    return (
        <div>
            <Container data-aos="fade-up">
                <video autoPlay muted loop id="video">
                    <source src="/abot/vid.mp4" type="video/mp4" />
                </video>
                <HeroContentContainer>
                    <HeroHeader>
                        About Athor Group
                    </HeroHeader>
                    <HeroSubheader>
                        Our group comprises a portfolio of operational<br />
                        trading businesses and strategic investments<br />
                        in our key market
                    </HeroSubheader>
                </HeroContentContainer>
            </Container>

            <div
                style={{
                    position: "relative",
                    padding: "80px 20px", /* Adjust padding for mobile */
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap", /* Allow items to wrap on smaller screens */
                    gap: "20px",
                }}
            >
                {/* First Trustee */}
                <TrusteeCard data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in" data-aos-delay="100">
                    <TrusteeName>Karl Reisinger</TrusteeName>
                    <TrusteeDescription>Member of Board of Trustees - Athor Foundation</TrusteeDescription>
                </TrusteeCard>

                {/* Second Trustee */}
                <TrusteeCard data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in" data-aos-delay="200">
                    <TrusteeName>Wolfgang Leitner</TrusteeName>
                    <TrusteeDescription>Member of Board of Trustees & Authorized Representative - Athor Foundation</TrusteeDescription>
                </TrusteeCard>

                {/* Third Trustee */}
                <TrusteeCard data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in" data-aos-delay="300">
                    <TrusteeName>Andreas Lemp</TrusteeName>
                    <TrusteeDescription>Member of Board of Trustees - Athor Foundation</TrusteeDescription>
                </TrusteeCard>
            </div>

            <BoardContainer>
                <div
                    style={{
                        position: "relative",
                        padding: "80px 20px", /* Adjust padding for mobile */
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                    }}
                >
                    {/* Walter Ortner */}
                    <TrusteeInfoContainer>
                        <TrusteeImage src="abot/walter.png" alt="Walter Ortner" />
                        <TrusteeDetails>
                            <h3>Walter Ortner</h3>
                            <h4>Managing Director - Athor Management GmbH</h4>
                            <p>
                                At Athor Group, Walter’s responsibilities encompass oversight of the
                                group’s subsidiaries through several directorships, managing the
                                group’s European investments and holding a managerial role within
                                our operational trading business. Walter counts more than 30 years
                                of experience within the international trade of primary and
                                secondary goods across Europe, Asia, Africa and the Middle East.
                            </p>
                        </TrusteeDetails>
                    </TrusteeInfoContainer>

                    {/* Karl Walter Veigl */}
                    <TrusteeInfoContainer>
                        <TrusteeImage src="abot/karl.png" alt="Karl Walter Veigl" />
                        <TrusteeDetails>
                            <h3>Karl Walter Veigl</h3>
                            <h4>Managing Director - Athor Management GmbH</h4>
                            <p>
                                Before joining the Athor Group, Karl has been in charge of several infrastructure and business development projects of the Siemens Group within both Eurasia and continental Europe. He brings with him decades of expertise within the metallurgical sector and a vast network of suppliers, supply chains and distribution.
                            </p>
                        </TrusteeDetails>
                    </TrusteeInfoContainer>

                    {/* Maximilian Ortner */}
                    <TrusteeInfoContainer>
                        <TrusteeImage src="abot/max.png" alt="Maximilian Ortner" />
                        <TrusteeDetails>
                            <h3>Maximilian Ortner</h3>
                            <h4>Managing Director - Athor Real GmbH</h4>
                            <p>
                                Maximilian is an experienced asset manager with a strong focus on Public Markets and Venture Capital. He has been active within the Fintech and Venture Capital space working for Germany’s biggest Fintech Bank N26 before transitioning into the Wealth Management space at UBS. He holds a MSc in Venture Creation from the National University of Singapore and BSc in Management from ESCP Business School.
                            </p>
                        </TrusteeDetails>
                    </TrusteeInfoContainer>
                </div>
            </BoardContainer>
        </div>
    );
}
