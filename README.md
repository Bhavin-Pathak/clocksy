# Clocksy

Clocksy is a modern, React-based digital clock application designed to provide time-related functionalities with a sleek and responsive user interface.

## Features

- Real-time clock display with customizable time formats 12H / 24H
- Responsive design for desktop and mobile devices
- World clock functionality
- Containerized deployment with Docker for consistent environments

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Docker and Docker Compose (for containerized setup)
- Git

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/Bhavin-Pathak/clocksy.git
cd clocksy
```

2. Install dependencies:

```bash
npm install
```

Or:

```bash
yarn install
```

3. Start the development server:

```bash
npm start
```

Or:

```bash
yarn start
```

4. Open `http://localhost:3000` in your browser.

## Docker Setup

1. Clone the repository:

```bash
git clone https://github.com/Bhavin-Pathak/clocksy.git
cd clocksy
```

2. Build and run using Docker Compose:

```bash
docker-compose up --build
```

3. Access the application at `http://localhost:3000`.

To stop the containers:

```bash
docker-compose down
```

## Usage

Navigate to `http://localhost:3000` to view the clocksy interface.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any problems or have questions, please open an issue on GitHub or contact the maintainers.

## Acknowledgments

- Thanks to all contributors who help improve Clocksy
- Built with React and modern web technologies
- Inspired by the need for a clean, functional digital clock application
