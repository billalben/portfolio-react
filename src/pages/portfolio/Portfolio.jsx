import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { projects } from "../../constants";

const Portfolio = () => {
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);

    if (category === "All") setDisplayedProjects(projects);
    else {
      setDisplayedProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <section className="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {["All", "Web design", "Applications", "Web development"].map(
          (category) => (
            <li className="filter-item" key={category}>
              <button
                className={category === selectedCategory ? "active" : ""}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          )
        )}
      </ul>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {displayedProjects.map((project) => (
            <li className="project-item active" key={project.id}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
