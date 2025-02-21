import React from "react";
import { Link } from "react-router-dom";
import "./css/ProjectsDetailPage.css";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";
import { FaAnglesLeft } from "react-icons/fa6";
import { projectsList } from "../data/DataProjects";
import { useParams, Navigate } from "react-router-dom";

const ProjectsDetailPage = () => {
  const { id } = useParams();
  const data = projectsList.find((item) => item.id === id);
  if (data == undefined) {
    return <Navigate to="/page-not-found" />;
  }

  return (
    <div className="text-white projectsPage">
      <NavbarComp page="projects" />
      <div className="spaceNav"></div>

      <div className="container pt-3 d-flex justify-content-center containerProjects">
        <div className="row justify-content-center w-100">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="row">
              <div className="col-12 d-flex align-items-center ps-0">
                <Link to={`/projects`} className="btn me-2 ps-0">
                  <FaAnglesLeft className="ps-0 btnBack" />
                </Link>
                <h3 className="fw-bold text-uppercase m-0 titleProjectDetailPage">{data.title}</h3>
              </div>
              <hr className="line" />
            </div>

            <div className="row">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={data.image1} className="d-block w-100 carouselImage" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={data.image2} className="d-block w-100 carouselImage" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={data.image3} className="d-block w-100 carouselImage" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="row py-1">
              <div className="col descriptionProjectDetail">{data.description}</div>
            </div>

            <div className="row py-1">
              <div className="col footerProjectDetail">
                {data.id == 5 ? (
                  <>
                    [<label style={{ color: "#ff6a6a" }}>ReactJS</label> | <label style={{ color: "#ff6a6a" }}>Bootstrap</label>]
                  </>
                ) : (
                  <>
                    [<label style={{ color: "#ff6a6a" }}>CodeIgniter 3</label> | <label style={{ color: "#ff6a6a" }}>Bootstrap</label>]
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
};

export default ProjectsDetailPage;
