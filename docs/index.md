# Portfolio Documentation

Welcome to the documentation for the Portfolio project. This document serves as a comprehensive guide for developers and contributors.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Security](#security)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- OpenAI API Key
- Docker (for production deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Payal091999/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

### Development Setup

1. Start development servers:
   ```bash
   npm run start:dev
   ```

2. Run tests:
   ```bash
   npm test
   ```

3. Run linters:
   ```bash
   npm run lint
   ```

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── assets/         # Static assets (images, fonts)
│   └── data/           # Static data and configurations
├── server/             # Backend API
├── public/             # Static files
├── docs/              # Documentation
├── tests/             # Test files
└── docker/           # Docker configuration
```

## Testing

### Unit Tests

- Components: `src/components/**/*.test.js`
- Pages: `src/pages/**/*.test.js`
- API: `server/**/*.test.js`

### Running Tests

- Run all tests: `npm test`
- Watch mode: `npm run test:watch`
- Coverage report: `npm run test:coverage`
- CI mode: `npm run test:ci`

## Deployment

### Production Build

```bash
npm run build:prod
```

### Docker Deployment

```bash
# Build
npm run docker:build

# Start
npm run start:docker

# Stop
npm run docker:stop
```

### Netlify

1. Connect to Netlify
2. Set environment variables
3. Configure build settings:
   - Build command: `npm run build:prod`
   - Publish directory: `dist`

## API Documentation

For detailed API documentation, see:
- [API Endpoints](docs/api/endpoints.md)
- [Authentication](docs/api/auth.md)
- [Error Handling](docs/api/errors.md)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Security

- Report security issues to: payalbera@example.com
- Never commit API keys or sensitive information
- Follow security best practices for all code changes
