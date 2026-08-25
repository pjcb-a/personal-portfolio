export type ProjectCategory = 
    | "development"
    | "creative-media"
    | "poster";

export interface Project {
    id: number;
    slug: string;
    title: string;
    category: ProjectCategory;
    categoryLabel: string;
    year: number;
    subtitle: string;
    description: string;
    role: string[];
    tools: string[];
    image: string;
    featured: boolean;
} 