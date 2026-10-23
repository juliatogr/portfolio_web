# portfolio_web_front

Repo to store the code for my portfolio website to let everybody know about me and my projects.

Built with [Angular](https://angular.dev) 22 (standalone components, zoneless).

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build in dist/
npm test         # unit tests (Vitest)
```

## Structure

```
src/app/
  app.ts / app.html        Layout: header with tabs + footer
  app.routes.ts            Routes for each tab (lazy loaded)
  data/
    portfolio.data.ts      <- Edit your content here (bio, music, games)
    portfolio.models.ts    Type definitions
  pages/
    biography/             /biography
    musical-projects/      /music
    games/                 /games
  shared/project-card/     Reusable card used by music and games
src/styles.scss            Global styles and color tokens (light/dark)
public/                    Static files (images, favicon)
```

## Adding a new tab

1. `npx ng generate component pages/my-tab`
2. Add a route in `app.routes.ts`.
3. Add an entry to `tabs` in `app.ts`.
