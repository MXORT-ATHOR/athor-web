import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Impressum = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const companies = [
    {
      logo: "athor/holding.png", // Replace with actual logo path
      name: "Athor Holding GmbH & Co KG",
      address: "Samhabestrastrasse 40, 4040 Linz, Austria",
      email: "office.real@athor.org",
      phone: "+43 05 9303250",
      companyRegister: "FN 482037 d",
    },
    {
      logo: "athor/management.png", // Replace with actual logo path
      name: "Athor Management GmbH",
      address: "Samhabestrastrasse 40, 4040 Linz, Austria",
      companyRegister: "FN 265553 w",
      uid: "ATU61844366",
    },
    {
      logo: "athor/handel.png", // Replace with actual logo path
      name: "Athor Handelsgesellschaft m.b.H.",
      address: "Samhabestrastrasse 40, 4040 Linz, Austria",
      companyRegister: "FN 211089 a",
      uid: "ATU52098705",
    },
    {
      logo: "athor/real.png", // Replace with actual logo path
      name: "Athor Real GmbH",
      address: "Samhabestrastrasse 40, 4040 Linz, Austria",
      companyRegister: "FN 481473 z",
      companyRegisterSpain: "NIF N0275430G",
    },
    {
      logo: "athor/sglim.png", // Replace with actual logo path
      name: "Athor SG Pte Ltd",
      address: "160 Robinson Road, #14-04, Business Federation Center, 068914 Singapore",
      email: "mo.sg@athor.org",
      companyRegisterSG: "UEN 202438497W",
    },
  ];

  return (
    <div style={{ padding: "80px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "3vw",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        Impressum
      </h2>
      {companies.map((company, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF", // White background for the card
            // Removed boxShadow to eliminate the shading
          }}
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            style={{ width: "150px", height: "auto", marginRight: "20px" }} // Wider logo with flexible height
          />
          <div>
            <h3 style={{ fontSize: "2vw", fontWeight: "600", color: "#1E3A8A" }}>
              {company.name}
            </h3>
            <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
              <strong>Address: </strong>{company.address}
            </p>
            {company.email && (
              <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
                <strong>E-mail: </strong>{company.email}
              </p>
            )}
            {company.phone && (
              <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
                <strong>Phone: </strong>{company.phone}
              </p>
            )}
            <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
              <strong>Company Register: </strong>{company.companyRegister}
            </p>
            {company.uid && (
              <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
                <strong>UID Number: </strong>{company.uid}
              </p>
            )}
            {company.companyRegisterSpain && (
              <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
                <strong>Company Register Spain: </strong>{company.companyRegisterSpain}
              </p>
            )}
            {company.companyRegisterSG && (
              <p style={{ fontSize: "1vw", color: "#4D4D4D" }}>
                <strong>Company Register Singapore: </strong>{company.companyRegisterSG}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Impressum;
