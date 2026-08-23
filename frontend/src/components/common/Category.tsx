import { projects } from "../../data/projects";
import { useState } from "react";
import "../../styles/common/category.css"

export default function Category() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(projects.map((project) => project.category)),
    ];

    // const filteredProjects = 
    //         selectedCategory === "All"
    //         ? projects
    //         : projects.filter(
    //             (project) => project.category === selectedCategory
    //         );

    return (
        <div className="category-container">
                {categories.map((category) => (
                    <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "active" : ""}
                    >
                        {category}
                    </button>
                ))}
        </div>
    );
}