import "../styles/Projects.css";
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
