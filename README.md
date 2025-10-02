# Crono Assignment task
This is a design implementation for crono application (https://www.figma.com/design/9stjTEFTCNpLiHePX2GYOk/Crono-dashboard---test-task?node-id=11-710&t=xGDL7WIUVyjAGzeM-0)

The application uses
Tansack Router
Typescript
React
Tailwind
and other small packages

Layout is implemented using grids. The signals section is scrollable with gutter scrollbar to prevent jumping content. The application follows design as much as possible keeping basic Tailwind setup so styles are overriden as little as possisble. Left menu is expandable. Following requirements, there are 2 popover elements for UI elements: info popover and button dropdown with action buttons. Each button removes signal from the list.

Folder structure:
1) assets (images, styles)
2) components (shared, route specific (dashboard))
3) constants (ui configs for components (can be moved to components files))
4) helpers (utility function to work with data)
5) entities (possible API responses)
6) mocks (hardcoded data)

# Getting Started

To run this application:

```bash
pnpm install
pnpm start
```

# Building For Production

To build this application for production:

```bash
pnpm build
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.


## Linting & Formatting


This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
pnpm lint
pnpm format
pnpm check
```

