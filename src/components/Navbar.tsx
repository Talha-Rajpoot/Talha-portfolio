import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: isMobile ? 0.6 : 1.2,
      speed: isMobile ? 1 : 1.2,
      smoothTouch: 0.1,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
      normalizeScroll: !isMobile,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });

    let refreshTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollSmoother.refresh(true), 150);
    };
    window.addEventListener("resize", onResize);

    ScrollTrigger.refresh();

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          MT
        </a>
        <a
          href="mailto:muhammadtalha0708@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          muhammadtalha0708@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
