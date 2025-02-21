import React from "react";
import "./FooterComp.css";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";

const FooterComp = () => {
  return (
    <div className="container containerFooter">
      <div className="row w-100">
        <div className="col-7">
          <a className="btn text-white btn-lg px-2" href="https://github.com/rudihadi" target="_blank">
            <div className="col-auto d-flex align-items-center sizeFooter">
              <FaGithub className="pe-1" />
              Github
            </div>
          </a>
          <a className="btn text-white btn-lg px-2" href="https://www.linkedin.com/in/rudi-hadi-syahfitrah-51328a231/" target="_blank">
            <div className="col-auto d-flex align-items-center sizeFooter">
              <FaLinkedin className="pe-1" />
              LinkedIn
            </div>
          </a>
        </div>
        <div className="col-lg-auto col-5 ms-auto font-weight-bold d-flex align-items-center">
          <div className="col-auto d-flex align-items-center px-2 sizeFooter">
            Rudi Hadi
            <FaRegCopyright className="px-1" />
            2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
