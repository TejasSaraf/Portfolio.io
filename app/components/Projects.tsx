"use client";
import { FaMap } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

function Projects() {
    return(
        <div className="projects">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="projectsSection">
            <div className="Map">
                <div className="icon">
                <FaMap />
                </div>
                <div className="projectTitle">
                    <span>Illinois Tech Campus Map</span>
                    <div className="link">
                        <a href="https://github.com/TejasSaraf/Illinois-Tech-Campus-Map">
                        <img className="skillsLogo" src="/github.png"></img>
                        </a>
                        <a href="https://illinoistechmap.netlify.app/">
                        <img className="skillsLogo" src="/globe.png"></img>
                        </a>
                    </div>
                    <span>A crowd-sourced navigation platform for IIT campuses, integrating Google Maps, Places and Aerial View APIs, featuring detailed navigation and custom interactive markers.</span>
                    <div className="projectSkills">
                        <img className="skillsLogo" src="/react.png" alt="react" />
                        <img className="skillsLogo" src="/javascript.png" alt="javascript"></img>
                        <img className="skillsLogo" src="/html.png" alt="html" />
                        <img className="skillsLogo" src="/css.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="Map">
                <div className="icon">
                <BiSolidMoviePlay />
                </div>
                <div className="projectTitle">
                    <span>Movies Flix</span>
                    <div className="link">
                        <a href="https://github.com/TejasSaraf/Movie-Booking-System">
                        <img className="skillsLogo" src="/github.png"></img>
                        </a>
                    </div>
                    <span>Movies Flix is a sophisticated movie booking system developed using Java and JavaFX, designed to streamline the process of managing and booking movie tickets. The system utilizes a MySQL database to efficiently handle data related to movies, theatres, and user bookings, ensuring robust data management and integrity.</span>
                    <div className="projectSkills">
                        <img className="skillsLogo" src="/java.png" alt="java" />
                        <img className="skillsLogo" src="/Mysql.png" alt="mysql"></img>
                    </div>
                </div>
            </div>
            </div>

            <div className="projectsSection">
            <div className="Map">
                <div className="icon">
                <SiHiveBlockchain />
                </div>
                <div className="projectTitle">
                    <span>Blockchain-E-Commerce</span>
                    <div className="link">
                        <a href="https://github.com/TejasSaraf/Blockchain-E-Commerce">
                        <img className="skillsLogo" src="/github.png"></img>
                        </a>
                    </div>
                    <span>This repo is an E-Commerce website which is based on the concept of Web 3.0 through which user can buy product using cryptocurrencies like bitcoin, Local currencies and by our own currency which is developed using blockchain.</span>
                    <div className="projectSkills">
                        <img className="skillsLogo" src="/react.png" alt="react" />
                        <img className="skillsLogo" src="/javascript.png" alt="javascript"></img>
                        <img className="skillsLogo" src="/html.png" alt="html" />
                        <img className="skillsLogo" src="/css.png" alt="css" />
                        <img className="skillsLogo" src="/solidity.png" alt="solidity" />
                    </div>
                </div>
            </div>

            <div className="Map">
                <div className="icon">
                <RiNetflixFill />
                </div>
                <div className="projectTitle">
                    <span>Netflix Clone</span>
                    <div className="link">
                        <a href="https://github.com/TejasSaraf/Netflix-Clone">
                        <img className="skillsLogo" src="/github.png"></img>
                        </a>
                    </div>
                    <span>A Netflix clone, solely designed using Angular and Typescript. Its an exercise in frontend development, aiming to capture the look and feel of Netflixs user interface.</span>
                    <div className="projectSkills">
                        <img className="skillsLogo" src="/angular.png" alt="angular" />
                        <img className="skillsLogo" src="/typescript.png" alt="typescript"></img>
                        <img className="skillsLogo" src="/html.png" alt="html" />
                        <img className="skillsLogo" src="/css.png" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects;