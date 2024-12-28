"use client";

function Education() {
    return(
        <div className="projects">
            <h1 className="text-3xl font-bold">Education</h1>
            <div className="projectsSection">
            <div className="Map">
                <div className="icon">
                <img className="IITLogo" src="/IITChicago.png"></img>
                </div>
                <div className="projectTitle">
                    <span>Masters, Information Technology and Management</span>
                    <span>Illinois Institute of Technology</span>
                    <span>Aug 2024 - May 2026</span>
                    <span>GPA: 4.0/4.0</span>
                    <span>Chicago, IL</span>
                </div>
            </div>

            <div className="Map">
                <div className="icon">
                <img className="SPPULogo" src="/SPPU.png"></img>
                </div>
                <div className="projectTitle">
                    <span>BTech, Information Technology</span>
                    <span>Savitribai Phule Pune University</span>
                    <span>July 2020 - May 2023</span>
                    <span>GPA: 8.02/10</span>
                    <span>Pune, India</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Education;