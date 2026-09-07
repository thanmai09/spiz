# MMA HYD Jersey Customizer MVP

A frontend MVP that demonstrates customizable jersey panels using the supplied MMA HYD design reference.

This is a local browser demo. It does not include accounts, payments, or a backend.

## Features

- Customize body color
- Customize collar color
- Customize left sleeve
- Customize right sleeve
- Customize pattern/accent
- Front/Back view
- Live preview
- Design summary
- Reset
- Undo
- Randomize
- Save
- Share

Logos, sponsor marks, and jersey text stay fixed. Changing a panel color does not recolor branding.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS

## Running locally

1. Install Node.js if it is not already installed.
2. Open the project folder in a terminal.
3. Run:

```bash
npm install
```

4. Run:

```bash
npm run dev
```

5. Open the localhost URL shown by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

This checks TypeScript and creates a `dist/` folder. It is not required just to try the demo.

## Client files

- Original client files are preserved under `client-assets/original/`
  - `MMA HYD.ai`
  - `MMA HYD.cdr.zip`
- Web-ready assets are under `client-assets/web/`
- Preview images are under `client-assets/reference/`

The interactive jersey is implemented as a structured SVG in the app.

The original CorelDRAW/AI artwork could not be converted directly into a fully editable web SVG because of format limitations. The live preview follows the supplied design as closely as possible.

This is an MVP demonstration, not a production manufacturing configurator.
