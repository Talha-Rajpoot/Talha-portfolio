import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const social = document.getElementById("social") as HTMLElement;
    const rafIds: number[] = [];
    const mouseMoveHandlers: Array<(e: MouseEvent) => void> = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      let rect = elem.getBoundingClientRect();
      const resizeObserver = new ResizeObserver(() => {
        rect = elem.getBoundingClientRect();
      });
      resizeObserver.observe(elem);

      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let rafId = 0;

      const updatePosition = () => {
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          currentX += dx * 0.1;
          currentY += dy * 0.1;
          link.style.setProperty("--siLeft", `${currentX}px`);
          link.style.setProperty("--siTop", `${currentY}px`);
        }
        rafId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove, { passive: true });
      mouseMoveHandlers.push(onMouseMove);

      rafId = requestAnimationFrame(updatePosition);
      rafIds.push(rafId);
    });

    return () => {
      rafIds.forEach((id) => cancelAnimationFrame(id));
      mouseMoveHandlers.forEach((h) => document.removeEventListener("mousemove", h));
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Talha-Rajpoot" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/muhammad-talha-082184278" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://wa.me/923211432292" target="_blank">
            <FaWhatsapp />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
