import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 40px;
  color: #000;
   @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Logo = styled.img`
  width: 350px;
  height: auto;
  margin-right: 60px;
  margin-bottom: 20px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const Details = styled.div`
  flex: 1 1 auto;
  min-width: 300px;
`;

const Header = styled.h3`
  font-size: 2vw;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const Text = styled.p`
  font-size: 1vw;
  color: #000;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Impressum = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const companies = [
    {
      logo: "athor/holding.png",
      name: "Athor Holding GmbH & Co KG",
      address: "Samhaberstrasse 40, 4040 Linz, Austria",
      email: "office.real@athor.org",
      phone: "+43 059303250",
      companyRegister: "FN482037d",
    },
    {
      logo: "athor/management.png",
      name: "Athor Management GmbH",
      address: "Samhaberstrasse 40, 4040 Linz, Austria",
      companyRegister: "FN265553w",
      uid: "ATU61844366",
    },
    {
      logo: "athor/handel.jpeg",
      name: "Athor Handelsgesellschaft m.b.H.",
      address: "Samhaberstrasse 40, 4040 Linz, Austria",
      companyRegister: "FN211089a",
      uid: "ATU52098705",
    },
    {
      logo: "athor/real.png",
      name: "Athor Real GmbH",
      address: "Samhaberstrasse 40, 4040 Linz, Austria",
      companyRegisterAustria: "FN481473z",
      companyRegisterSpain: "NIF N0275430G",
    },
    {
      logo: "athor/sglim.png",
      name: "Athor SG PTE. LTD.",
      address: "160 Robinson Road, #14-04, Business Federation Center, 068914 Singapore",
      email: "mo.sg@athor.org",
      companyRegisterSingapore: "UEN 202438497W",
    },
  ];

  return (
    <Container>
      <Title>Impressum</Title>
      {companies.map((company, index) => (
        <Card
          key={index}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <Logo src={company.logo} alt={`${company.name} logo`} />
          <Details>
            <Header>{company.name}</Header>
            <Text>
              <strong>Address: </strong>
              {company.address}
            </Text>
            {company.email && (
              <Text>
                <strong>E-mail: </strong>
                {company.email}
              </Text>
            )}
            {company.phone && (
              <Text>
                <strong>Phone: </strong>
                {company.phone}
              </Text>
            )}
            {company.companyRegister && (
              <Text>
                <strong>Company Register: </strong>
                {company.companyRegister}
              </Text>
            )}
            {company.uid && (
              <Text>
                <strong>UID Number: </strong>
                {company.uid}
              </Text>
            )}
            {company.companyRegisterSpain && (
              <Text>
                <strong>Company Register Spain: </strong>
                {company.companyRegisterSpain}
              </Text>
            )}
            {company.companyRegisterAustria && (
              <Text>
                <strong>Company Register Austria: </strong>
                {company.companyRegisterAustria}
              </Text>
            )}
            {company.companyRegisterSingapore && (
              <Text>
                <strong>Company Register Singapore: </strong>
                {company.companyRegisterSingapore}
              </Text>
            )}
          </Details>
        </Card>
      ))}
    </Container>
  );
};

export default Impressum;
