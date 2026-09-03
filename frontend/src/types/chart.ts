export type Label = "Design" | "Development"

export interface Chart {
    title: string;
    level: number;
    label: Label;
}