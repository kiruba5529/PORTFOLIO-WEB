import "../styles/Skills.css"

const skills = [
  "HTML", "CSS", "Bootstrap", "JavaScript",
  "React JS", "Python", "MySQL", "Git&GitHub"
];

export default function Skills() {
  return (
    <section id="skills" className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row g-3">
          {skills.map((skill, index) => (
            <div className="col-md-4" key={index}>
              <div className="skill-card text-center p-4">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
