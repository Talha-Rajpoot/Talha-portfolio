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
                <h4>Senior Software Engineer</h4>
                <h5>Metaviz Pro, Lahore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading cross-platform mobile app development using React Native
              & Flutter. Designing scalable architecture, integrating AI-powered
              systems, and managing end-to-end deployment of production apps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Metaviz Pro, Lahore</h5>
              </div>
              <h3>MAY 2025</h3>
            </div>
            <p>
              Built production-level mobile features and real-time systems.
              Integrated Firebase services, RESTful APIs, and third-party
              services with seamless frontend-backend communication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Metaviz Pro, Lahore</h5>
              </div>
              <h3>SEP 2024</h3>
            </div>
            <p>
              Developed UI components and core application features. Assisted
              in API integration, debugging, and improved app stability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS in Computer Science</h4>
                <h5>University of Gujrat</h5>
              </div>
              <h3>2020-2024</h3>
            </div>
            <p>
              Completed Bachelor of Science in Computer Science with strong
              foundations in logic building, OOP, data structures, and databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
