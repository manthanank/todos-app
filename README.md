# To-Do's Application

This is a simple To-do application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js) and styled with Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [License](#license)

## Features

- Add new to-dos
- Mark to-dos as completed
- Edit to-do titles
- Delete to-dos
- Responsive design with Tailwind CSS

## Prerequisites

Make sure you have the following installed:

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- Angular CLI: Install globally using `npm install -g @angular/cli`

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/manthanank/todos-app.git
   cd todos-app
   ```

2. **Backend setup**:

   Navigate to the `backend` folder and install the dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Frontend setup**:

   Navigate to the `frontend` folder and install the dependencies:

   ```bash
   cd ..
   npm install
   ```

4. **Configure Tailwind CSS**:

   Tailwind CSS should already be configured. If not, follow these steps:

   - Install Tailwind CSS and its dependencies:

     ```bash
     npm install tailwindcss postcss autoprefixer
     ```

   - Initialize Tailwind CSS:

     ```bash
     npx tailwindcss init
     ```

   - Update `tailwind.config.js`:

     ```javascript
     /** @type {import('tailwindcss').Config} */
     module.exports = {
       content: [
         "./src/**/*.{html,ts}"
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

   - Create `postcss.config.js`:

     ```javascript
     module.exports = {
       plugins: [
         require('tailwindcss'),
         require('autoprefixer'),
       ]
     }
     ```

   - Update `src/styles.css`:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

## Running the Application

1. **Start the backend server**:

   Navigate to the `backend` folder and start the server:

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:3000`.

2. **Start the Angular development server**:

   Navigate to the `frontend` folder and start the Angular server:

   ```bash
   cd ..
   ng serve
   ```

   The Angular app will run on `http://localhost:4200`.

## License

This project is licensed under the MIT License.
