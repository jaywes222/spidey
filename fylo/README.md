# TailwindCLI

## Features
***Utility-First CSS:*** Use utility classes directly in your HTML for fast, consistent styling.

***Easy Configuration:*** Customize your styles using a simple configuration file (tailwind.config.js).

***JIT Compilation:*** Automatically purge unused styles for optimal performance.

***Responsive Design:*** Built-in support for responsive design and variants.

***Plugins:*** Extend Tailwind's functionality with community plugins or custom plugins.

## Quick Start

## Install Tailwind CSS:
npm install -D tailwindcss

## Initialize Configuration:
npx tailwindcss init

## Create a CSS File (src/styles.css):
@tailwind base;
@tailwind components;
@tailwind utilities;

## Build Your CSS:
npx tailwindcss build src/styles.css -o dist/output.css

## Link CSS in Your HTML:
`<link rel="stylesheet" href="dist/output.css">`

## Documentation
For full documentation, visit the [Tailwind CSS website](https://tailwindcss.com/docs/installation).

## License
MIT


