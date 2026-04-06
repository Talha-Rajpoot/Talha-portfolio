import { useRef } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

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
    title: "Diet App",
    category: "AI-Based Nutrition & Fitness Platform",
    desc: "An AI-powered mobile application built with Flutter & Dart focused on simplifying diet planning, calorie tracking, and healthy lifestyle management. Features intelligent meal planning, food recognition scanning, and Instacart integration for seamless ingredient ordering.",
    tech: ["Flutter", "Dart", "AI APIs", "Instacart", "Adapty", "Firebase"],
    features: [
      { title: "AI Meal Planning", desc: "Smart calorie & nutrition recommendations" },
      { title: "Food Recognition", desc: "Scan food to extract nutritional data" },
      { title: "Social Feed", desc: "Short-video content with engagement" },
      { title: "Instacart Integration", desc: "Order ingredients seamlessly" },
      { title: "Fasting Tracker", desc: "Meal progress & user analytics" },
      { title: "Streak System", desc: "Daily motivation & commitment" },
    ],
    screens: [
      "/images/dietapp-onboarding.webp",
      "/images/dietapp-home.webp",
      "/images/dietapp-feed.png",
      "/images/dietapp-scanner.png",
      "/images/dietapp-asset66.webp",
      "/images/dietapp-nutrition.webp",
      "/images/dietapp-grocery.png",
      "/images/dietapp-instacart.png",
      "/images/dietapp-streak.webp",
      "/images/dietapp-fitness.webp",
      "/images/dietapp-activity.webp",
      "/images/dietapp-measurement.webp",
      "/images/dietapp-meal.webp",
      "/images/dietapp-hero.webp",
      "/images/dietapp-succeed.webp",
      "/images/dietapp-asset69.webp",
    ],
    link: "https://metavizai.com/case-study/nutrition-first-fitness-assistant-with-meal-planning-daily-progress-intelligence/",
    linkLabel: "Case Study",
  },
  {
    title: "The Toolbox",
    category: "AI Business Automation Platform",
    desc: "An AI-powered platform for trade business owners to streamline operations, automate marketing, and manage customer relationships with tools for booking, lead tracking, CRM, and industry insights.",
    tech: ["React Native", "Strapi.js", "GoHighLevel CRM", "AI APIs", "Firebase"],
    features: [
      { title: "AI Chatbot", desc: "Intelligent business assistant" },
      { title: "Lead Management", desc: "Track & convert leads with analytics" },
      { title: "Blog & Content", desc: "Dynamic content management via Strapi" },
      { title: "Performance Reports", desc: "Revenue & conversion insights" },
      { title: "Shop & E-Commerce", desc: "Branding content marketplace" },
      { title: "Subscription Plans", desc: "Tiered business packages" },
    ],
    screens: [
      "/images/toolbox-3.webp",
      "/images/toolbox-1.webp",
      "/images/toolbox-2.webp",
      "/images/toolbox-4.webp",
    ],
    link: "https://apps.apple.com/pk/app/the-toolbox/id6740332347",
    linkLabel: "App Store",
  },
  {
    title: "MishwarUAE",
    category: "Tourism & Travel App",
    desc: "An inbound tourism mobile app designed to help residents and visitors explore the UAE with seamless navigation, personalized recommendations, secure bookings, rewards system, and integrated store.",
    tech: ["React Native", "Location APIs", "Secure Payments", "Firebase"],
    features: [
      { title: "Tour Discovery", desc: "Explore attractions & landmarks" },
      { title: "Secure Payments", desc: "Visa, Mastercard & more" },
      { title: "Rewards System", desc: "Earn points, win prizes" },
      { title: "In-App Store", desc: "Travel gear & accessories" },
      { title: "Multi-Language", desc: "Arabic & English support" },
      { title: "Social Login", desc: "Google & Facebook auth" },
    ],
    screens: [
      "/images/mishwar-12.webp",
      "/images/mishwar-13.webp",
      "/images/mishwar-1.webp",
      "/images/mishwar-2.webp",
      "/images/mishwar-3.webp",
      "/images/mishwar-4.webp",
      "/images/mishwar-7.webp",
      "/images/mishwar-8.webp",
      "/images/mishwar-9.webp",
      "/images/mishwar-10.webp",
      "/images/mishwar-11.webp",
    ],
    link: "https://apps.apple.com/pk/app/mishwaruae/id6449493036",
    linkLabel: "App Store",
  },
  {
    title: "Customer Hub",
    category: "AI-Powered Customer Engagement",
    desc: "A cross-platform mobile app built to enhance customer interaction and support through AI-driven chat, real-time notifications, multi-tenant business management, and intuitive UX.",
    tech: ["React Native", "Strapi", "DigitalOcean", "Firebase"],
    features: [
      { title: "AI Chat", desc: "Smart replies & session history" },
      { title: "Real-Time Notifications", desc: "Visual indicators for quick response" },
      { title: "Multi-Tenant", desc: "Manage customers per business" },
      { title: "Feedback System", desc: "Capture & analyze user input" },
    ],
    screens: [
      "/images/customerhub-icon.jpg",
    ],
    link: "https://apps.apple.com/pk/app/the-customer-hub/id6741159778",
    linkLabel: "App Store",
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
                <img src={src} alt={`${project.title} screen ${i + 1}`} />
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
          <img src={project.screens[0]} alt={project.title} />
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
