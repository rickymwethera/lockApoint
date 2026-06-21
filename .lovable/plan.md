# Why the logos aren't visible

The logos themselves are fine — the asset files exist, the CDN URLs return HTTP 200, and the SVGs are valid (they have a proper `viewBox`). The real problem is that **the entire React app is crashing before anything renders**, so the `<img>` tags for the logos never even reach the DOM. What you're seeing in the preview is just the static fallback markup from `index.html`.

## Root cause

In `src/main.tsx`:

```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>          // ← React is used here…
    <ThemeProvider>
      <BrowserRouter basename="/lockApoint">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
```

`React.StrictMode` is referenced, but `React` is never imported. When the browser loads the bundle it throws:

```
Uncaught ReferenceError: React is not defined
```

(Verified by loading the preview in a headless browser — the page error is literally `React is not defined`, and `document.querySelectorAll('img')` returns an empty list, meaning `Header` never mounted.)

Because the crash happens at the very top of the tree, nothing below it renders — that's why no logo, no nav, no hero, nothing shows except the bare HTML shell. The "placeholder text" you're seeing is the `alt`/leftover content from `index.html`, not a broken `<img>`.

## The fix

Add the missing React import at the top of `src/main.tsx`:

```tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/lockApoint">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
```

One line — `import React from "react";` — restores rendering. The existing `Header.tsx` already references the logos correctly (`logoLight.url` / `logoDark.url` from the `.asset.json` pointer files), so once the app mounts again, both light and dark logos will appear and the theme toggle will swap them as expected.

## Why it looked like a logo problem

- The only visible text on the page came from `index.html` (title/meta), not from React components.
- Without DevTools open it's easy to mistake "nothing rendered" for "image broken" — both look like a blank header area.
- The asset pipeline, Vite `base: '/lockApoint/'`, and CDN URLs are all working correctly and need no changes.

## Plan

1. Edit `src/main.tsx` to add `import React from "react";` at the top.
2. Reload the preview and confirm the header logo, hero, sections, and footer all render, and that toggling the theme swaps between the light and dark logo.

No other files need to change.
