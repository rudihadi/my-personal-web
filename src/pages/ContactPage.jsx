import React from "react";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactPage = () => {
  return (
    <div className="text-white" style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      <NavbarComp page="contact" />
      <div style={{ minHeight: "10vh" }}></div>

      <div className="container pt-4 d-flex justify-content-center" style={{ minHeight: "75vh", textAlign: "justify" }}>
        <div className="w-100">
          <div className="row w-100 justify-content-center">
            <div className="text-center col-lg-10 col-md-12 col-sm-12" style={{ fontSize: "50pt", color: "#ff6a6a", fontFamily: "'Grechen Fuemen', serif" }}>
              Yuk, kita ngobrol lebih lanjut!
            </div>
          </div>
          <div className="row w-100 justify-content-center pt-3">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ul style={{ fontSize: "20pt" }}>
                <li style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <a className="nav-link" href="https://www.instagram.com/rudihadi95?igsh=MXV3M2xrd3NvbWoz" target="_blank" style={{ fontSize: "20pt" }}>
                    <i style={{ color: "#ff6a6a" }}>
                      <FaInstagram />
                    </i>
                    <label className="px-2">rudihadi</label>
                  </a>
                </li>
                <li style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <a className="nav-link" href="https://www.linkedin.com/in/rudi-hadi-syahfitrah-51328a231/" target="_blank" style={{ fontSize: "20pt" }}>
                    <i style={{ color: "#ff6a6a" }}>
                      <FaLinkedin />
                    </i>
                    <label className="px-2">Rudi Hadi Syahfitrah</label>
                  </a>
                </li>
                <li style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <i style={{ color: "#ff6a6a" }}>
                    <SiGmail />
                  </i>
                  <label className="px-2">rudihadi5395@gmail.com</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
};

export default ContactPage;
