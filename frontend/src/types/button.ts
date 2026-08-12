import type { ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline";

export interface ButtonProps {
  label: string;
  href: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  external?: boolean;
  download?: boolean;
}