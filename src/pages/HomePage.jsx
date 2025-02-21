import React from "react";
import { Link } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

const HomePage = () => {
  return (
    <div className="text-white" style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      <NavbarComp page="home" />
      <div style={{ minHeight: "10vh" }}></div>
      <div className="container pt-4 d-flex justify-content-center" style={{ minHeight: "75vh", textAlign: "justify" }}>
        <div>
          <div className="row w-100 justify-content-center">
            <div className="col-lg-10 col-md-10 col-sm-12 col-12 mb-2 px-5 pt-5" style={{ fontSize: "40px", color: "#ff6a6a", fontFamily: "'Grechen Fuemen', serif" }}>
              Hai 👋🏼
            </div>
          </div>
          <div className="row w-100 justify-content-center">
            <div className="col-lg-10 col-md-10 col-sm-12 col-12 px-5">
              <p className="m-0" style={{ fontSize: "20px", textAlign: "justify" }}>
                Saya Rudi Hadi Syahfitrah! Saya seorang Junior Programmer di PT Sumatera Timber Indo Industry.
              </p>
              <p style={{ fontSize: "20px", textAlign: "justify" }}>Saya bertanggung jawab dalam mengembangkan aplikasi web sesuai dengan kebutuhan pengguna, memastikan solusi yang efisien dan user-friendly</p>
              <Link to={`/about`} className="btn btn-primary">
                More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default HomePage;
