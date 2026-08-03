export interface InternalMenuItem {
  id: string;
  kind: "internal";
  label: string;
  to: string;
}

export interface ExternalMenuItem {
  id: string;
  kind: "external";
  label: string;
  href: string;
  openInNewTab?: boolean;
  download?: boolean;
}

export type MenuItem = InternalMenuItem | ExternalMenuItem;