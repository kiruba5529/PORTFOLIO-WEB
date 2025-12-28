import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="About">
      <h2 className="text-center mb-4">About Me</h2>
      <p className="text-center">
        I am a passionate web developer with an engineering background.
        I enjoy building responsive, scalable, and user-friendly web applications
        using React JS, JavaScript, and modern frontend technologies.
      </p>
      <div className="text">
        <a href="#projects" className="text">
          View Projects
        </a>
      </div>
    </section>
  );
}
