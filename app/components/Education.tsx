"use client";

function Education() {
  return (
    <div id="education" className="projects">
      <div className="educationTitle">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 -960 960 960">
          <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"></path>
        </svg>
        <h1 className="text-3xl font-bold">Education</h1>
      </div>
      <div className="projectsSection">
        <div className="Map">
          <div className="icon">
            <img className="IITLogo" src="/IITChicago.png"></img>
          </div>
          <div className="projectTitle">
            <h2>Masters, Information Technology and Management</h2>
            <h3>Illinois Institute of Technology</h3>
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
            <h2>BTech, Information Technology</h2>
            <h3>Savitribai Phule Pune University</h3>
            <span>July 2020 - May 2023</span>
            <span>GPA: 8.02/10</span>
            <span>Pune, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
