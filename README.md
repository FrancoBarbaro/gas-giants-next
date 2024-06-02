# Gas Giants Next

## Description

A recreation of my original Gas Giants website, transitioning from HTML and CSS to a modern Next.js and Chakra UI web app.

## Features

- **AI-Powered Q&A**: An AI chatbot powered by OpenAI's GPT-3.5 Turbo API to answer user questions about the solar system.
- **Detailed Planet Pages**: Individual pages for Jupiter, Saturn, Uranus, and Neptune, each featuring an "About" section, planet symbols, fun facts, and interactive flip-cards with interesting images.
- **User Feedback Form**: A feedback page with a form that allows users to share their thoughts about the site, storing feedback using Firebase Realtime Database.
- **Firebase Integration**: Use of Firebase Realtime Database for content and feedback storage, along with Firebase Anonymous Authentication and Firebase AppCheck for security.
- **Dynamic Backgrounds**: Zooming and animated backgrounds with shooting stars, tailored for each page.
- **Responsive Design**: The website is optimized to look great on all devices, from desktops to tablets and smartphones, ensuring a consistent and user-friendly experience across different screen sizes.

## Technologies Used

- Next.js
- React
- TypeScript
- Chakra UI
- Firebase
- GPT-3.5 Turbo API

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/FrancoBarbaro/gas-giants-next.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd gas-giants-next
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Deployment

This project is deployed using Vercel. You can visit the live project at: https://gas-giants-next.vercel.app
