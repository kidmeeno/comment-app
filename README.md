# Comments App

A simple yet effective comments web application built with **React**, **Redux**, **Tailwind CSS**, and **Redux Persist**, designed to fetch comments from an API, allow users to add/delete comments, and persist state even after a page reload.

This project was bootstrapped using **Vite** for faster build times and better developer experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Initial Fetch**: Fetch comments from an external API (`https://dummyjson.com/comments`) on the first load.
- **State Persistence**: Comments, input field data, and scroll position persist even after refreshing the page using **Redux Persist**.
- **Add/Delete Comments**: Users can add new comments or delete existing ones.
- **Efficient Data Fetching**: The application avoids redundant API requests once actions are performed on the comment list.
- **Responsive UI**: Clean and user-friendly interface styled with **Tailwind CSS**.
  
## Technologies Used

- **Vite**: Lightning-fast project bundler.
- **React**: Front-end JavaScript library for building user interfaces.
- **Redux**: State management for predictable state updates.
- **Redux Persist**: To persist Redux store across page reloads.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Local Storage**: Used by Redux Persist to store app state.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (>= 14.x)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/comments-app.git
   cd comments-app
   ```

2. **Install dependencies**:

   If you're using `npm`:

   ```bash
   npm install
   ```

   Or if you're using `yarn`:

   ```bash
   yarn install
   ```

### Running the Project

To run the development server:

If using `npm`:

```bash
npm run dev
```

Or using `yarn`:

```bash
yarn dev
```

This will start the Vite development server at `http://localhost:5173` (or another port if 3000 is in use).

## Folder Structure

Here's a breakdown of the folder structure:

```
├── node_modules
├── index.html    # Root HTML file
│   
├── src
│   ├── App.js        # Main app component
│   ├── main.jsx      # Entry point of the app
│   ├── store         # Redux store setup
│   │   └── index.js  # Redux store configuration and slices
│   ├── assets        # Static assets like images, fonts, etc.
├── package.json      # Project configuration and dependencies
└── vite.config.js    # Vite-specific configuration
```

### Key Files:

- **`App.js`**: Contains the main logic for fetching, adding, and deleting comments. Handles input persistence and scroll position.
- **`store/index.js`**: The Redux store setup, including **comments slice** and **Redux Persist** configuration.
- **`vite.config.js`**: Vite configuration for bundling and development.

## Usage

1. **Initial Load**: When you first load the app, it fetches comments from the API.
2. **Add Comment**: Type a new comment in the input field and click "Add Comment".
3. **Delete Comment**: You can remove a comment by clicking the "Delete" button next to it.
4. **Persistence**: After adding/deleting a comment or typing in the input field, refresh the page—your input and scroll position will remain unchanged.

## Dependencies

The following dependencies are used in the project:

- **React**: `^18.x`
- **Redux**: `^8.x`
- **Redux Toolkit**: `^1.9.x`
- **Redux Persist**: `^6.x`
- **Tailwind CSS**: `^3.x`
- **Vite**: `^4.x`

Install them by running:

```bash
npm install react redux @reduxjs/toolkit redux-persist tailwindcss
```

If you're using `yarn`:

```bash
yarn add react redux @reduxjs/toolkit redux-persist tailwindcss
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

### Steps to Contribute:

1. Fork the project.
2. Create a feature branch: `git checkout -b feature-branch-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.