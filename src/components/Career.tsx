import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile App Developer</h4>
                <h5>Metaviz Pro</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building cross-platform mobile applications end-to-end using
              Flutter and React Native, backed by scalable Node.js and Python
              FastAPI services. Delivering polished, production-ready apps
              from concept to App Store and Play Store deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS in Information Technology</h4>
                <h5>PUCIT</h5>
              </div>
              <h3>2020-2024</h3>
            </div>
            <p>
              Completed Bachelor of Science in Information Technology with
              strong foundations in software engineering, data structures,
              databases, and modern application development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
