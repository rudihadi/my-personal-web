import React from "react";
import { Link } from "react-router-dom";
import "./css/ProjectsPage.css";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";
import { projectsList } from "../data/DataProjects";

const ProjectsPage = () => {
  return (
    <div className="text-white projectsPage">
      <NavbarComp page="projects" />
      <div className="spaceNav"></div>

      <div className="container containerProjects pt-3 d-flex justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="fw-bold text-uppercase titleProjectPage">Projects</h3>
                <hr className="line" />
              </div>
            </div>

            <div className="row">
              {projectsList.map((item) => {
                return (
                  <div className="col-6 pb-2">
                    <div class="card cardProject text-white">
                      <div className="card-header fw-bold">
                        <Link to={`/project/${item.id}`} className="nav-link titleProjects">
                          {item.title}
                        </Link>
                      </div>
                      <div class="card-body descriptionProject">{item.description}</div>
                      <div className="card-footer footerProject">
                        {item.id == 5 ? (
                          <>
                            [<label className="labelFooter">ReactJS</label> | <label className="labelFooter">Bootstrap</label>]
                          </>
                        ) : (
                          <>
                            [<label className="labelFooter">CodeIgniter 3</label> | <label className="labelFooter">Bootstrap</label>]
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-6 pb-2">
                <div class="card cardProject text-white">
                  <div className="card-header fw-bold">
                    <a href="https://github.com/rudihadi/my-personal-web" className="nav-link titleProjects" target="_blank">
                      My Personal Web
                    </a>
                  </div>
                  <div class="card-body descriptionProject">My Personal Website</div>
                  <div className="card-footer footerProject"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
};

export default ProjectsPage;
