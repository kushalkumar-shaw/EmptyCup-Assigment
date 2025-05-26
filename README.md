# EmptyCup

A full-stack web application for showcasing design studio profiles.

## Overview

EmptyCup displays designer profiles with interactive features like shortlist, hide, and report. Built with vanilla HTML/CSS/JavaScript frontend and Python Flask backend, all containerized with Docker.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Nginx
- **Backend**: Python Flask
- **Deployment**: Docker & Docker Compose

## Quick Start

1. Clone the repository
2. Run with Docker:
   ```bash
   docker-compose up --build
   ```
3. Access at http://localhost:3000

## Project Structure

```
emptycup/
├── index.html
├── style.css
├── script.js
├── images/
├── emptycup-api/app.py
├── docker-compose.yml
└── Dockerfiles
```

## Features

- View designer profiles (rating, experience, projects, pricing)
- Interactive actions (shortlist, hide, report)
- Responsive design
- REST API integration
- Containerized deployment

## API Endpoints

- `GET /api/designers` - Fetch all designer profiles

## License

MIT License