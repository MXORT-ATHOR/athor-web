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
    left: 0;
    bottom: 0;
    width: 70vw;
    padding: 24px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

`

const HeroHeader = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 5vw;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;
`

const HeroSubheader = styled.h2`
    text-align: left;
    color: white;
    font-family: Spline Sans;
    font-size: 3vw;
    font-weight: 300;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;

`

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
        padding: 80,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* First Trustee */}
      <div
        style={{
          maxWidth: "30vw",
          textAlign: "center",
        }}
      >
        <h3
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in"
          data-aos-delay="100"
          style={{
            fontSize: "2vw",
            fontWeight: "600",
            color: "#4D4D4D",
          }}
        >
          Karl Reisinger
        </h3>
        <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
          Member of Board of Trustees - Athor Foundation
        </p>
      </div>

      {/* Second Trustee */}
      <div
        style={{
          maxWidth: "30vw",
          textAlign: "center",
        }}
      >
        <h3
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in"
          data-aos-delay="200"
          style={{
            fontSize: "2vw",
            fontWeight: "600",
            color: "#4D4D4D",
          }}
        >
          Wolfgang Leitner
        </h3>
        <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
          Member of Board of Trustees & Authorized Representative - Athor
          Foundation
        </p>
      </div>

      {/* Third Trustee */}
      <div
        style={{
          maxWidth: "30vw",
          textAlign: "center",
        }}
      >
        <h3
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in"
          data-aos-delay="300"
          style={{
            fontSize: "2vw",
            fontWeight: "600",
            color: "#4D4D4D",
          }}
        >
          Andreas Lemp
        </h3>
        <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
          Member of Board of Trustees - Athor Foundation
        </p>
      </div>
            </div>
            <div
      style={{
        position: "relative",
        padding: 80,
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      {/* Walter Ortner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#F7F7F7",
        }}
      >
        <img
          src="abot/walter.png" // Replace with actual image URL
          alt="Walter Ortner"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        <div>
          <h3
            style={{
              fontSize: "2vw",
              fontWeight: "600",
              color: "#1E3A8A", // Darker blue for name
            }}
          >
            Walter Ortner
          </h3>
          <h4 style={{ fontSize: "1.2vw", color: "#6B7280" }}>
            Managing Director - Athor Management GmbH
          </h4>
          <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
            At Athor Group, Walter’s responsibilities encompass oversight of the
            group’s subsidiaries through several directorships, managing the
            group’s European investments and holding a managerial role within
            our operational trading business. Walter counts more than 30 years
            of experience within the international trade of primary and
            secondary goods across Europe, Asia, Africa and the Middle East.
          </p>
        </div>
      </div>

      {/* Karl Walter Veigl */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#F7F7F7",
        }}
      >
        <img
          src="abot/karl.png" // Replace with actual image URL
          alt="management/karl.pn"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        <div>
          <h3
            style={{
              fontSize: "2vw",
              fontWeight: "600",
              color: "#1E3A8A", // Darker blue for name
            }}
          >
            Karl Walter Veigl
          </h3>
          <h4 style={{ fontSize: "1.2vw", color: "#6B7280" }}>
            Managing Director - Athor Real GmbH
          </h4>
          <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
            Before joining the Athor Group, Karl has been in charge of several
            infrastructure and business development projects of the Siemens
            Group within both Eurasia and continental Europe. He brings with him
            decades of expertise within the metallurgical sector and a vast
            network of suppliers, supply chains and distribution.
          </p>
        </div>
      </div>

      {/* Maximilian Ortner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#F7F7F7",
        }}
      >
        <img
          src="abot/max.png" // Replace with actual image URL
          alt="Maximilian Ortner"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        <div>
          <h3
            style={{
              fontSize: "2vw",
              fontWeight: "600",
              color: "#1E3A8A", // Darker blue for name
            }}
          >
            Maximilian Ortner
          </h3>
          <h4 style={{ fontSize: "1.2vw", color: "#6B7280" }}>
            Managing Director - Athor Real GmbH
          </h4>
          <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
            At the head of the Athor Group, Walter’s responsibilities encompass
            oversight of the group’s subsidiaries through several directorships,
            managing the group’s European investments and holding a managerial
            role within our operational trading business. Walter counts more
            than 30 years of experience within the international trade of
            primary and secondary goods across Europe, Asia, Africa and the
            Middle East.
          </p>
        </div>
      </div>
    </div>

        </div>
    );
}