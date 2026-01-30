# Project Routes

A Node.js web application built with Express and EJS templating engine.

## Project Structure

```
.
├── app.js                 # Main application file
├── package.json           # Project dependencies and scripts
├── public/
│   └── css/
│       └── styles.css     # Stylesheet
└── views/
    ├── index.ejs          # Home page
    ├── about.ejs          # About page
    ├── services.ejs       # Services page
    ├── blog.ejs           # Blog page
    ├── contact.ejs        # Contact page
    ├── 404.ejs            # 404 error page
    └── partials/
        ├── navbar.ejs     # Navigation bar component
        └── footer.ejs     # Footer component
```

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the configured port).

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Templating engine
- **CSS** - Styling

## Features

- Multiple page routes (home, about, services, blog, contact)
- Reusable navbar and footer components
- 404 error page handling
- Static file serving (CSS, images, etc.)

## Development

To contribute or modify the project:
1. Edit routes in `app.js`
2. Update views in the `views/` directory
3. Add styles to `public/css/styles.css`


