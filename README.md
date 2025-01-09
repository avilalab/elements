# Elements by avilalab

## Overview

This project is a React-based framework for building visual components for websites. It leverages Vite for fast builds, Bootstrap for UI styling, SASS for custom styling, and Storybook for interactive component documentation.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
4. [Available Scripts](#available-scripts)
5. [Project Structure](#project-structure)
6. [Customization](#customization)
7. [FAQ](#faq)

---

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A code editor, such as [VS Code](https://code.visualstudio.com/)

---

## Installation

Follow these steps to set up the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/avilalab/elements.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd elements
   ```

3. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

---

## Running the Project

### Development Server

Start the development server with Vite:

Using npm:

```bash
npm run dev
```

Using Yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

### Storybook

Run Storybook to view and interact with your components:

Using npm:

```bash
npm run storybook
```

Using Yarn:

```bash
yarn storybook
```

Storybook will be available at `http://localhost:6006`.

---

## Available Scripts

### `npm run dev` or `yarn dev`
Starts the development server with Vite.

### `npm run build` or `yarn build`
Builds the project for production.

### `npm run storybook` or `yarn storybook`
Runs the Storybook development server.

### `npm run build-storybook` or `yarn build-storybook`
Builds the Storybook for deployment.

### `npm run lint` or `yarn lint`
Runs ESLint to check for code quality issues.

---

## Project Structure

```
src/
├── components/          # Standard
├── extra/               # Custom elements
├── forms/               # Form elements
├── pages/               # Contains page templates
├── scss/                # All styles
├── validation/          # Validation presets
├── App.jsx              # Main application file
├── index.jsx            # Entry point
├── .storybook/          # Storybook configuration
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

---

## Customization

### SASS

Modify SASS files in the `src/scss/` directory to customize the styles. Add additional `.scss` files and import them as needed in your components.

### Bootstrap

The project uses Bootstrap via npm. Modify Bootstrap variables by overriding them in a `_variables.scss` file in `src/scss/`.

### Components

Create or modify components in the `src/components/` directory. Ensure each component has an associated Storybook story for documentation.

---

## FAQ

**Q1: How do I add a new dependency to the project?**  
A1: Run `npm install package-name` or `yarn add package-name` to install new dependencies. Then, import them where needed.

**Q2: Can I use another CSS framework instead of Bootstrap?**  
A2: Yes, but you need to remove Bootstrap dependencies from `package.json` and adjust your components and styles accordingly.

**Q3: How do I deploy the project?**  
A3: Run `npm run build` or `yarn build` to create a production build. Then, deploy the files in the `dist/` folder to your hosting provider.
