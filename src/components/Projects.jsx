/*import "../styles/Projects.css";
import { useState } from "react";

export default function Projects() {
const [showList, setShowList] = useState(false);

  return (
    <section id="projects" className="bg-light py-5">
      <div className="cards">
        <h1>Project</h1>
      <button onClick={() => setShowList(!showList)}>
        Mini Projects
      </button>

      {showList && (
        <ul className="mini-list">
           <li>✅ TODO List</li>
           <li>🎨 Button Color Changer</li>
           <li>👁️ Show / Hide Text</li>
           <li>🔢 Click Counter</li>
           <li>🌙 Theme Toggle</li>
           <li>🧮 Calculator</li>
        </ul>
      )}
    </div>
    </section>
  );
}
*/

import "../styles/Projects.css";
import { useState } from "react";

export default function Projects() {
  const [showList, setShowList] = useState(false);

  const miniProjects = [
    { name: "✅ TODO List", link: "https://github.com/kiruba5529/myreactapp-mern-stack/blob/main/src/TODO.jsx" },
    { name: "🎨 Button Color Changer", link: "https://your-link/color-changer" },
    { name: "👁️ Show / Hide Text", link: "https://your-link/show-hide" },
    { name: "🔢 Click Counter", link: "https://your-link/counter" },
    { name: "🌙 Theme Toggle", link: "https://your-link/theme-toggle" },
    { name: "🧮 Calculator", link: "https://your-link/calculator" },
  ];

  return (
    <section id="projects" className="bg-light py-5">
      <div className="cards">
        <h1>Projects</h1>

        <button onClick={() => setShowList(!showList)}>
          Mini Projects
        </button>

        {showList && (
          <ul className="mini-list">
            {miniProjects.map((project, index) => (
              <li key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
