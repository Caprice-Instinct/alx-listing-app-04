# ALX Listing App

A modern Airbnb clone listing page built with Next.js, TypeScript, and Tailwind CSS.

## Project Description

The ALX Listing App is a property listing application designed to showcase various accommodations, similar to Airbnb. This project demonstrates modern web development practices using Next.js for server-side rendering, TypeScript for type safety, and Tailwind CSS for responsive styling.

### Key Features

- Responsive property listing page
- Reusable UI components (Card, Button)
- Type-safe development with TypeScript
- Modern styling with Tailwind CSS
- Optimized performance with Next.js

## Project Structure

```
alx-listing-app/
├── components/          # Reusable React components
│   └── common/         # Common UI components
│       ├── Card.tsx    # Property card component for displaying listings
│       └── Button.tsx  # Reusable button component
├── interfaces/         # TypeScript type definitions
│   └── index.ts       # Interface definitions for props and data models
├── constants/          # Application constants
│   └── index.ts       # Reusable constants (API URLs, configuration, UI text)
├── public/            # Static assets
│   └── assets/        # Images, SVGs, and other media files
├── pages/             # Next.js pages (using Pages Router)
│   ├── _app.tsx       # Custom App component
│   ├── _document.tsx  # Custom Document component
│   └── index.tsx      # Home page
├── styles/            # Global styles
│   └── globals.css    # Global CSS with Tailwind directives
└── README.md          # Project documentation
```

### Directory Purposes

- **components/**: Contains all reusable React components. The `common/` subdirectory houses UI components used throughout the application.
- **interfaces/**: Stores TypeScript interfaces and type definitions to ensure type safety across the project.
- **constants/**: Holds constant values such as API endpoints, configuration settings, and reusable text strings.
- **public/assets/**: Contains static assets like images and SVG files that are publicly accessible.
- **pages/**: Next.js pages directory using the Pages Router for file-based routing.
- **styles/**: Global styles and Tailwind CSS configuration.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-listing-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint to check code quality

## Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **React**: React 19
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint with Next.js configuration

## Development Guidelines

- Use TypeScript for all new files to ensure type safety
- Follow the existing project structure when adding new components
- Use Tailwind CSS utility classes for styling
- Keep components reusable and modular
- Place shared interfaces in the `interfaces/` directory
- Store reusable constants in the `constants/` directory

## Contributing

When contributing to this project:

1. Follow the established code structure
2. Ensure all TypeScript types are properly defined
3. Test components in different screen sizes
4. Run `npm run lint` before committing
5. Write clear commit messages

## License

This project is part of the ALX Software Engineering Program.

## Repository

**GitHub repository**: alx-listing-app
