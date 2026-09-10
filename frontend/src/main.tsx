import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App'

import "@fontsource-variable/manrope/wght.css";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/typography.css";

import { SpeedInsights } from "@vercel/speed-insights/react"

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
    <SpeedInsights/>
      <App />
    </BrowserRouter>
  </StrictMode>
);