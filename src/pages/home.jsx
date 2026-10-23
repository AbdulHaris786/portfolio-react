
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">BE CSE STUDENT · 2027</p>

        <h1>
          Hi, I'm <span>Abdul Haris M</span>
        </h1>

        <p className="intro">
          I'm a final-year Computer Science Engineering student passionate about web development and technology. Through internships and personal projects, I've gained practical experience in building responsive user interfaces and web applications. I'm continuously improving my skills in frontend development, databases, and programming while exploring new ways to create useful and user-friendly digital experiences. I'm looking forward to starting my professional journey and growing as a developer.
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
      </div>

      <div className="hero-photo">
        <img src="/profile.jpeg" alt="Abdul Haris M" />
      </div>
    </section>
  );
}
