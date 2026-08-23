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

export interface DevelopmentProject extends Project {
    category: "development";
    subtitle: string;
    description: string;
    role: string[];
    tools: string[];
    status?: "featured" | "in-progress";
}

export interface CreativeMediaProject extends Project {
    category: "creative-media";
    subtitle: string;
    description: string;
}

export interface PosterProject extends Project {
    category: "poster";
    subtitle: string;
}

export type ProjectFilter =
    | DevelopmentProject
    | CreativeMediaProject
    | PosterProject;