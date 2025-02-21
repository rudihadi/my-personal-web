import React from "react";
import { BsCodeSquare } from "react-icons/bs";
import { FaComputer, FaCircleDot } from "react-icons/fa6";
import { MdSportsSoccer } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

const AboutPage = () => {
  return (
    <div className="text-white" style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      <NavbarComp page="about" />
      <div style={{ minHeight: "10vh" }}></div>

      <div className="container pt-3 d-flex justify-content-center" style={{ minHeight: "75vh", textAlign: "justify" }}>
        <div className="row justify-content-center w-100">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="fw-bold text-uppercase" style={{ color: "#ff6a6a" }}>
                  About Me
                </h3>
                <hr style={{ height: "2px", backgroundColor: "#836fff", border: "none" }} />
                <p style={{ fontSize: "20px", textAlign: "justify" }}>
                  Hai, saya Rudi!👋🏼 Saya seorang Junior Programmer dari Medan, Indonesia. Saya telah berkecimpung di dunia IT sejak 2018. Karier saya dimulai sebagai IT Support dari 2018 hingga 2023, dan sejak 2023, saya beralih menjadi
                  Junior Programmer. Saat ini, saya terus berkembang dan belajar untuk meningkatkan keterampilan di bidang pemrograman.
                </p>
              </div>

              <div className="col-12">
                <h4 className="fw-bold" style={{ color: "#ff6a6a" }}>
                  Ini saya :
                </h4>
                <ul>
                  <li style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <i style={{ color: "#ff6a6a" }}>
                      <BsCodeSquare />
                    </i>
                    <label className="px-2">Junior Programmer</label>
                  </li>
                  <li style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <i style={{ color: "#ff6a6a" }}>
                      <FaComputer />
                    </i>
                    <label className="px-2">IT Support</label>
                  </li>
                  <li style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <i style={{ color: "#ff6a6a" }}>
                      <MdSportsSoccer />
                    </i>
                    <label className="px-2">Hobi Soccer & Badminton</label>
                  </li>
                </ul>
              </div>

              <div className="col-12">
                <h4 className="fw-bold" style={{ color: "#ff6a6a" }}>
                  Karir :
                </h4>
                <ul>
                  <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <div className="col">
                      <i style={{ color: "#ff6a6a" }}>
                        <IoMdCheckmarkCircleOutline />
                      </i>
                      <label className="px-2 fw-bold" style={{ color: "#ff6a6a" }}>
                        IT Support - Desktop Engineer (DE)
                      </label>
                    </div>
                    <div className="col ps-4">PT. Astragraphia.</div>
                    <div className="col ps-4">April 2018 - Desember 2021</div>
                    <div className="col ps-4">Jl. SM. Raja km 6,5 no.4, Harjosari II, Kec. Medan Amplas, Kota Medan, Sumatera Utara 20229</div>
                    <div className="col ps-4 fw-bold">Repair & Maintenance PC / Laptop Customer (Bank Permata, Asuransi Astra, FIF, BPJS Kesehatan dll)</div>
                  </li>
                  <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <div className="col">
                      <i style={{ color: "#ff6a6a" }}>
                        <IoMdCheckmarkCircleOutline />
                      </i>
                      <label className="px-2 fw-bold" style={{ color: "#ff6a6a" }}>
                        IT Support - Technology Infrastructure Engineer (TIE Maybank)
                      </label>
                    </div>
                    <div className="col ps-4">PT. Infomedia Nusantara (Penempatan Maybank Medan).</div>
                    <div className="col ps-4">Maret 2022 - September 2023</div>
                    <div className="col ps-4">Jl. Rs. Fatmawati, Kav. 77-81, Kebayoran Baru, Jakarta Selatan, 12150</div>
                    <div className="col ps-4 fw-bold">Repair & Maintenance (PC, Laptop, CCTV, Network dll)</div>
                  </li>
                  <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <div className="col">
                      <i style={{ color: "#ff6a6a" }}>
                        <IoMdCheckmarkCircleOutline />
                      </i>
                      <label className="px-2 fw-bold" style={{ color: "#ff6a6a" }}>
                        Junior Programmer
                      </label>
                    </div>
                    <div className="col ps-4">PT. Sumatera Timber Indo Industry.</div>
                    <div className="col ps-4">September 2023 - Sekarang</div>
                    <div className="col ps-4">Jl. Batang Kuis No. 8 Desa Buntu Bedimbar KM 2,5, Kec. Tj. Morawa, Kabupaten Deli Serdang, Sumatera Utara 20362</div>
                    <div className="col ps-4 fw-bold">Develop, Update Feature & Bug Fixing Website</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12">
              <h4 className="fw-bold" style={{ color: "#ff6a6a" }}>
                Keterampilan :
              </h4>
              <ul>
                <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <div className="col">
                    <i style={{ color: "#ff6a6a" }}>
                      <IoCheckmarkDoneSharp />
                    </i>
                    <label className="px-2 fw-bold">Repair & Maintenance</label>
                  </div>
                  <div className="col ps-4 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>PC</label>
                      </div>
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>Laptop</label>
                      </div>
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>CCTV</label>
                      </div>
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>Network</label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <div className="col">
                    <i style={{ color: "#ff6a6a" }}>
                      <IoCheckmarkDoneSharp />
                    </i>
                    <label className="px-2 fw-bold">Programming Language</label>
                  </div>
                  <div className="col ps-4 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>PHP</label>
                      </div>
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>JavaScript</label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <div className="col">
                    <i style={{ color: "#ff6a6a" }}>
                      <IoCheckmarkDoneSharp />
                    </i>
                    <label className="px-2 fw-bold">Fullstack</label>
                  </div>
                  <div className="col ps-4 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>CodeIgniter 3</label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <div className="col">
                    <i style={{ color: "#ff6a6a" }}>
                      <IoCheckmarkDoneSharp />
                    </i>
                    <label className="px-2 fw-bold">Frontend</label>
                  </div>
                  <div className="col ps-4 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>HTML</label>
                      </div>
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>CSS</label>
                      </div>
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>ReactJS</label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <div className="col">
                    <i style={{ color: "#ff6a6a" }}>
                      <IoCheckmarkDoneSharp />
                    </i>
                    <label className="px-2 fw-bold">Backend</label>
                  </div>
                  <div className="col ps-4 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>CodeIgniter 3</label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pb-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <div className="col">
                    <i style={{ color: "#ff6a6a" }}>
                      <IoCheckmarkDoneSharp />
                    </i>
                    <label className="px-2 fw-bold">Database</label>
                  </div>
                  <div className="col ps-4 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-auto me-1 d-flex align-items-center">
                        <FaCircleDot className="me-1" style={{ color: "#ff6a6a", fontSize: "10px" }} />
                        <label>MySQL</label>
                      </div>
                    </div>
                  </div>
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

export default AboutPage;
