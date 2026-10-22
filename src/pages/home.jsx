
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">BE CSE STUDENT · 2027</p>
      <h1>
        Hi, I'm <span>Abdul Haris M</span>
      </h1>
      <p className="intro">
        I'm a Computer Science Engineering student interested in
        web development, UI design, and building useful digital experiences.
      </p>

      <div className="actions">
        <Link to="/projects" className="btn primary">
          View My Projects
        </Link>
        <Link to="/contact" className="btn secondary">
          Contact Me
        </Link>
      </div>

      <div className="hero-meta">
        <span>HTML · CSS · JavaScript</span>
        <span>Java · Python · MongoDB</span>
      </div>
    </section>
  );
}
