import { projects } from "../../data/projects";

export default function Category() {
    return (
        <div className="category-container">
        <ul className="category">
            {projects.map((item) => (
                <li key={item.categoryLabel}>
                    {item.category}
                </li>
            ))}
        </ul>
        </div>
    );
}