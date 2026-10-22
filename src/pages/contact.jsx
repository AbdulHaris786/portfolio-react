
export default function Contact() {
  return (
    <section className="content-page">
      <p className="eyebrow">LET'S CONNECT</p>
      <h1>Contact <span>Me</span></h1>
      <p>
        Have an opportunity or want to connect? You can reach me
        through email or my professional profiles.
      </p>

      <div className="info-grid">
        <a className="info-card contact-card"
           href="mailto:abdulmharis1@gmail.com">
          <h3>Email</h3>
          <p>abdulmharis1@gmail.com</p>
        </a>

        <a className="info-card contact-card"
           href="https://www.linkedin.com/in/abdulharis"
           target="_blank" rel="noreferrer">
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/abdulharis</p>
        </a>

        <a className="info-card contact-card"
           href="https://github.com/AbdulHaris786"
           target="_blank" rel="noreferrer">
          <h3>GitHub</h3>
          <p>github.com/AbdulHaris786</p>
        </a>
      </div>
    </section>
  );
}
