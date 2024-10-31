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
      address: "Samhaberstrasse 40, 4040 Linz, Austria",
      email: "office.real@athor.org",
      phone: "+43 059303250",
      companyRegister: "FN482037d",
    },
    {
      logo: "athor/management.png", // Replace with actual logo path
      name: "Athor Management GmbH",
      address: "Samhaberstrasse 40, 4040 Linz, Austria",
      companyRegister: "FN265553w",
      uid: "ATU61844366",
    },
    {
      logo: "athor/handel.jpeg", // Replace with actual logo path
      name: "Athor Handelsgesellschaft m.b.H.",
      address: "Samhaberstrasse 40, 4040 Linz, Austria",
      companyRegister: "FN211089a",
      uid: "ATU52098705",
    },
    {
      logo: "athor/real.png", // Replace with actual logo path
      name: "Athor Real GmbH",
      address: "Samhaberstrasse 40, 4040 Linz, Austria",
      companyRegisterAustria: "FN481473z",
      companyRegisterSpain: "NIF N0275430G",
    },
    {
      logo: "athor/sglim.png", // Replace with actual logo path
      name: "Athor SG PTE. LTD.",
      address: "160 Robinson Road, #14-04, Business Federation Center, 068914 Singapore",
      email: "mo.sg@athor.org",
      companyRegisterSingapore: "UEN 202438497W",
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
          color: "#000", // Changed to black
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
          }}
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            style={{ width: "350px", height: "auto", marginRight: "60px" }} // Increased logo size
          />
          <div>
            <h3 style={{ fontSize: "2vw", fontWeight: "600", color: "#000" }}> {/* Changed to black */}
              {company.name}
            </h3>
            <p style={{ fontSize: "1vw", color: "#000" }}> {/* Changed to black */}
              <strong>Address: </strong>{company.address}
            </p>
            {company.email && (
              <p style={{ fontSize: "1vw", color: "#000" }}> {/* Changed to black */}
                <strong>E-mail: </strong>{company.email}
              </p>
            )}
            {company.phone && (
              <p style={{ fontSize: "1vw", color: "#000" }}> {/* Changed to black */}
                <strong>Phone: </strong>{company.phone}
              </p>
            )}
            {company.companyRegister && (
              <p style={{ fontSize: "1vw", color: "#000" }}> {/* Changed to black */}
                <strong>Company Register: </strong>{company.companyRegister}
              </p>
            )}
            {company.uid && (
              <p style={{ fontSize: "1vw", color: "#000" }}> {/* Changed to black */}
                <strong>UID Number: </strong>{company.uid}
              </p>
            )}
            {company.companyRegisterSpain && (
              <p style={{ fontSize: "1vw", color: "#000" }}> {/* Changed to black */}
                <strong>Company Register Spain: </strong>{company.companyRegisterSpain}
              </p>
            )}
            {company.companyRegisterAustria && (
              <p style={{ fontSize: "1vw", color: "#000" }}> {/* Changed to black */}
                <strong>Company Register Austria: </strong>{company.companyRegisterAustria}
              </p>
            )}
            {company.companyRegisterSingapore && (
              <p style={{ fontSize: "1vw", color: "#000" }}> {/* Changed to black */}
                <strong>Company Register Singapore: </strong>{company.companyRegisterSingapore}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Impressum;
