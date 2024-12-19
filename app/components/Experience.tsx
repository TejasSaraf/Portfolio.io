"use client";

function Experience(){
    return(
        <div className="experience">
      <h1>Experience</h1>

      <div className="jio">
        <img className="jioLogo" src="/Reliance_Jio_Logo.png" alt="" />
        <div className="jioDetails">
        <span>Software Developer</span>
        <span>Jio Platforms Limited</span>
        <span>Oct 2023 - July 2024</span>
        <span>Mumbai, India</span>
        <div className="content">
          <span>Developed a Resizing feature for camera feed on Immersive Screen Share using AngularJS and Typescript, integrating Agora RESTful service API and WebRTC API; optimized API calls with 5.5s query intervals.</span>
          <span>Revamped JioEvents’ New Host UI by resolving 50+ critical observations, significantly enhance the experience.</span>
          <span>Enabled drag-resize on camera feeds with ngx-drag-resize library, improving host background visibility by 99.9%.</span>
          <span>Streamlined OTP verification with unifying email/phone fields, dynamically updating API payloads for a seamless user experience for over 10,000+ customers.</span>
          <span>Contributed to front-end feature development, CI/CD pipeline setup, and application deployment on GCP (Google Cloud Platform), achieving 80% live event success rates.</span>
          <span>Delivered dynamic components using Angular Routes, NgModule, RxJS, Reactive Forms, Observables, and Services.</span>
          <span>Integrated IFrame for Host Control, enabling attendee-side rendering with real-time event previews.</span>
          <span>Maintained frontend performance by 5% by resolving 20 cross browser production bugs through effective debugging.</span>
        </div>
        </div>
      </div>

      <div className="eliteSoftwares">
      <img className="eliteSoftwaresLogo" src="/elitesoftwares.jpg" alt="" />
      <div className="eliteDetails">
      <span>Web Developer Intern</span>
        <span>Elite Softwares</span>
        <span>Jan 2023 - Nov 2023</span>
        <span>Pune, India</span>
        <div className="content">
          <span>Designed College ERP features for faculty, enabling profile updates and improving usability and control.</span>
          <span>Boosted feature efficiency by 25% by building “create task” and “mark attendance” functions with ReactJS & Redux</span>
        </div>
      </div>
      </div>

      <div className="gravitechDreams">
      <img className="gravitechDreamsLogo" src="/gravitechDreams.png" alt="" />
      <div className="gravitechDetails">
      <span>Software Engineer Intern</span>
        <span>Gravitech Dreams Pvt Ltd</span>
        <span>Jan 2023 - June 2023</span>
        <span>Pune, India</span>
        <span>Enhanced a social media handler app with NodeJS, JavaScript, & MySQL, improving user engagement significantly.</span>
        <span>Automated post scheduling for 5 platforms while ensuring SDLC compliance for reliable performance.</span>
      </div>
      </div>

      <div className="exposysLabs">
      <img className="exposysLabsLogo" src="/exposys.jpg" alt="" />
      <div className="exposysDetails">
      <span>Web Developer Intern</span>
        <span>Exposys Data Labs</span>
        <span>Dec 2021 - Jan 2022</span>
        <span>Remote</span>
        <span>Built a responsive blogging website with CRUD for admin users using Python, tripling page views for the platform.</span>
        <span>Developed content management features, empowering users to create and customize blogs effortlessly.</span>
      </div>
      </div>
      
    </div>
    );
}

export default Experience;