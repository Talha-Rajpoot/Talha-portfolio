import { useRef } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const base = import.meta.env.BASE_URL;

interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  features: { title: string; desc: string }[];
  screens: string[];
  link: string;
  linkLabel: string;
}

const projects: Project[] = [
  {
    title: "RPPA App",
    category: "Real-Time Directory & Community Platform",
    desc: "A comprehensive mobile application built with Flutter featuring real-time data management, user authentication, and a seamless cross-platform experience integrated with a Brilliant Directory backend and Firebase.",
    tech: ["Flutter", "Brilliant Directory", "Firebase"],
    features: [
      { title: "Real-Time Data", desc: "Live sync with Firebase backend" },
      { title: "Secure Auth", desc: "Robust user authentication flow" },
      { title: "Push Notifications", desc: "Engage users with timely alerts" },
      { title: "Cross-Platform UI", desc: "Polished iOS & Android experience" },
      { title: "Directory Listings", desc: "Rich Brilliant Directory integration" },
      { title: "Firebase Sync", desc: "Offline support & cloud storage" },
    ],
    screens: [`${base}images/rppa.png`],
    link: "https://play.google.com/store/apps/details?id=com.app.rppa&hl=en",
    linkLabel: "Play Store",
  },
  {
    title: "ICore Career Hub",
    category: "Career & Job Matching Platform",
    desc: "A career management platform connecting job seekers with opportunities. Built with React Native and powered by a Strapi + PostgreSQL backend, featuring profile building, job matching, and application tracking.",
    tech: ["React Native", "Strapi", "PostgreSQL"],
    features: [
      { title: "Job Matching", desc: "Smart role recommendations" },
      { title: "Profile Builder", desc: "Rich candidate profiles" },
      { title: "Application Tracker", desc: "Monitor every application" },
      { title: "Strapi CMS", desc: "Dynamic content management" },
      { title: "Secure Auth", desc: "Token-based user sessions" },
      { title: "Push Alerts", desc: "Real-time job notifications" },
    ],
    screens: [`${base}images/icore.png`],
    link: "https://play.google.com/store/apps/details?id=com.icorecareerhub&hl=en",
    linkLabel: "Play Store",
  },
  {
    title: "Diet App",
    category: "Health & Nutrition Tracking",
    desc: "A health and nutrition tracking app with personalized meal plans, calorie counter, progress monitoring, and dietary recommendations. Built with Flutter & Dart on a Strapi backend.",
    tech: ["Flutter", "Dart", "Strapi"],
    features: [
      { title: "Meal Planning", desc: "Personalized daily meal plans" },
      { title: "Calorie Counter", desc: "Track intake with precision" },
      { title: "Progress Tracker", desc: "Monitor your health journey" },
      { title: "Diet Recommendations", desc: "Tailored dietary guidance" },
      { title: "Food Logs", desc: "Quick, structured food entries" },
      { title: "Strapi Content", desc: "Dynamic recipes & articles" },
    ],
    screens: [`${base}images/dietapp.png`],
    link: "https://play.google.com/store/apps/details?id=com.biotin.diet_app&hl=en",
    linkLabel: "Play Store",
  },
  {
    title: "Africa Travel Hub",
    category: "Travel & Tourism Platform",
    desc: "A travel companion app for exploring Africa with destination guides, booking integration, itinerary planning, and local experiences. Flutter frontend powered by a Python FastAPI backend.",
    tech: ["Flutter", "Python", "FastAPI"],
    features: [
      { title: "Destination Guides", desc: "Rich travel content & tips" },
      { title: "Itinerary Planner", desc: "Plan trips day-by-day" },
      { title: "Booking Integration", desc: "Seamless reservations" },
      { title: "Local Experiences", desc: "Discover authentic adventures" },
      { title: "FastAPI Backend", desc: "Lightning-fast Python APIs" },
      { title: "Multi-Region Support", desc: "Cover every corner of Africa" },
    ],
    screens: [`${base}images/africa.png`],
    link: "https://africatravelhub.com/login",
    linkLabel: "Website",
  },
  {
    title: "Hit Local Hub",
    category: "Local Business Discovery",
    desc: "A local business discovery platform connecting users with nearby services, reviews, deals, and community engagement. Built with Flutter on a FastAPI backend with Brilliant Directory integration.",
    tech: ["Flutter", "FastAPI", "Brilliant Directory"],
    features: [
      { title: "Business Discovery", desc: "Find nearby services fast" },
      { title: "Ratings & Reviews", desc: "Trusted community feedback" },
      { title: "Local Deals", desc: "Exclusive offers & promotions" },
      { title: "Geo Search", desc: "Location-based results" },
      { title: "FastAPI Backend", desc: "Scalable Python services" },
      { title: "Community Features", desc: "Engage with local users" },
    ],
    screens: [`${base}images/hitlocal.png`],
    link: "https://www.hitlocalhub.com.au/",
    linkLabel: "Website",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (dir: "left" | "right") => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="featured-project">
      <div className="featured-header">
        <div className="featured-label">
          {index === 0 ? "Featured Project" : `Project 0${index + 1}`}
        </div>
        <div className="featured-title-row">
          <h3>{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            className="featured-link"
            data-cursor="disable"
          >
            {project.linkLabel} <MdArrowOutward />
          </a>
        </div>
        <p className="featured-category">{project.category}</p>
        <p className="featured-desc">{project.desc}</p>
        <div className="featured-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="featured-features">
        {project.features.map((f, i) => (
          <div className="feature-card" key={i}>
            <h5>{f.title}</h5>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      {project.screens.length > 1 ? (
        <div className="gallery-wrapper">
          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={() => scrollGallery("left")}
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <div className="gallery-scroll" ref={galleryRef}>
            {project.screens.map((src, i) => (
              <div className="gallery-item" key={i}>
                <img
                  src={src}
                  alt={`${project.title} screen ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  width={1080}
                  height={1920}
                />
              </div>
            ))}
          </div>
          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={() => scrollGallery("right")}
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>
        </div>
      ) : (
        <div className="single-image-wrapper">
          <img
            src={project.screens[0]}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width={1080}
            height={1920}
          />
        </div>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Work;
