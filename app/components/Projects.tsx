"use client";

function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projectsTitle">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 -960 960 960">
          <path d="M120-440v-320q0-33 23.5-56.5T200-840h240v400H120Zm240-80Zm160-320h240q33 0 56.5 23.5T840-760v160H520v-240Zm0 720v-400h320v320q0 33-23.5 56.5T760-120H520ZM120-360h320v240H200q-33 0-56.5-23.5T120-200v-160Zm240 80Zm240-400Zm0 240Zm-400-80h160v-240H200v240Zm400-160h160v-80H600v80Zm0 240v240h160v-240H600ZM200-280v80h160v-80H200Z"></path>
        </svg>
        <span className="h1">Projects</span>
      </div>
      <div className="projectsSection">
        <div className="Map">
          <div className="mapIcon">
            <img className="Logo" src="/location.png"></img>
          </div>
          <div className="projectTitle">
            <div className="projectHeading">
              <span>Illinois Tech Campus Map</span>
            </div>
            <div className="link">
              <a href="https://github.com/TejasSaraf/Illinois-Tech-Campus-Map">
                <img className="skillsLogo" src="/github.png"></img>
              </a>
              <a href="https://illinoistechmap.netlify.app/">
                <img className="skillsLogo" src="/globe.png"></img>
              </a>
            </div>
            <span>
              A crowd-sourced navigation platform for IIT campuses, integrating
              Google Maps, Places and Aerial View APIs, featuring detailed
              navigation and custom interactive markers.
            </span>
            <div className="projectSkills">
              <img className="skillsLogo" src="/react.png" alt="react" />
              <img
                className="skillsLogo"
                src="/javascript.png"
                alt="javascript"
              ></img>
              <img className="skillsLogo" src="/html.png" alt="html" />
              <img className="skillsLogo" src="/css.png" alt="" />
            </div>
          </div>
        </div>

        <div className="Map">
          <div className="movieIcon">
            <img className="Logo" src="/movie.png"></img>
          </div>
          <div className="projectTitle">
            <div className="projectHeading">
              <span>Movies Flix</span>
            </div>
            <div className="link">
              <a href="https://github.com/TejasSaraf/Movie-Booking-System">
                <img className="skillsLogo" src="/github.png"></img>
              </a>
            </div>
            <span>
              Movies Flix is a sophisticated movie booking system developed
              using Java and JavaFX, designed to streamline the process of
              managing and booking movie tickets. The system utilizes a MySQL
              database to efficiently handle data related to movies, theatres,
              and user bookings, ensuring robust data management and integrity.
            </span>
            <div className="projectSkills">
              <img className="skillsLogo" src="/java.png" alt="java" />
              <img className="skillsLogo" src="/Mysql.png" alt="mysql"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="projectsSection">
        <div className="Map">
          <div className="ecommerceIcon">
            <img className="Logo" src="/online-shop.png"></img>
          </div>
          <div className="projectTitle">
            <div className="projectHeading">
              <span>Blockchain-E-Commerce</span>
            </div>
            <div className="link">
              <a href="https://github.com/TejasSaraf/Blockchain-E-Commerce">
                <img className="skillsLogo" src="/github.png"></img>
              </a>
            </div>
            <span>
              This repo is an E-Commerce website which is based on the concept
              of Web 3.0 through which user can buy product using
              cryptocurrencies like bitcoin, Local currencies and by our own
              currency which is developed using blockchain.
            </span>
            <div className="projectSkills">
              <img className="skillsLogo" src="/react.png" alt="react" />
              <img
                className="skillsLogo"
                src="/javascript.png"
                alt="javascript"
              ></img>
              <img className="skillsLogo" src="/html.png" alt="html" />
              <img className="skillsLogo" src="/css.png" alt="css" />
              <img className="skillsLogo" src="/solidity.png" alt="solidity" />
            </div>
          </div>
        </div>

        <div className="Map">
          <div className="socialIcon">
            <img className="Logo" src="/social-media.png"></img>
          </div>
          <div className="projectTitle">
            <div className="projectHeading">
              <span>Social Media Handler</span>
            </div>
            <div className="link">
              <a href="https://github.com/TejasSaraf/Social-Media-Handler">
                <img className="skillsLogo" src="/github.png"></img>
              </a>
            </div>
            <span>
              A Media Handler that handles 5 different social media platforms, automates post-scheduling for social media platforms while ensuring Software Development Lifecycle compliance for reliable performance.
            </span>
            <div className="projectSkills">
              <img className="skillsLogo" src="/Javascript.png" alt="Javascript" />
              <img
                className="skillsLogo"
                src="/Mysql.png"
                alt="mysql"
              ></img>
              <img className="skillsLogo" src="/html.png" alt="html" />
              <img className="skillsLogo" src="/css.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
