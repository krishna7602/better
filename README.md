
# Internshala Project

This project is a replica of the Better.com website. It includes various pages such as Home, Start, About, and Mortgage Calculator. The project is built using React and Tailwind CSS for styling.

## Endpoints

- `/` - Home page
- `/start` - Start page
- `/about` - About page
- `/calculator` - Mortgage Calculator page

## Routing

The routing is handled using `react-router-dom`. The `App.jsx` file contains the routes for the application.

```jsx
// filepath: /d:/internshala_project/frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import About from './pages/About';
import MortgageCalculator from './pages/Mortage_calculator';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start' element={<Start />} />
        <Route path='/about' element={<About />} />
        <Route path='/calculator' element={<MortgageCalculator />} />
      </Routes>
    </Router>
  );
};

export default App;
```

## Folder Structure

The project has the following folder structure:

```
/d:/internshala_project
├── frontend
│   ├── src
│   │   ├── Components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.css
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Start.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Mortage_calculator.jsx
│   │   ├── App.jsx
│   │   ├── index.js
```

### Components

- `Navbar.jsx`: Contains the navigation bar with dropdown menus and a mobile menu.
- `HeroSection.jsx`: Contains the hero section with a call-to-action button.
- `FeaturesSection.jsx`: Contains the features section highlighting the benefits.
- `TestimonialsSection.jsx`: Contains the testimonials section with customer reviews.
- `Footer.jsx`: Contains the footer with links to privacy policy, terms of service, and contact us.
- `Navbar.css`: Contains the CSS for the navigation bar.

### Pages

- `Home.jsx`: Contains the home page with the hero section, features section, testimonials section, and footer.
- `Start.jsx`: Contains the start page with a call-to-action to get pre-approved for a mortgage.
- `About.jsx`: Contains the about page (to be implemented).
- `Mortage_calculator.jsx`: Contains the mortgage calculator page.

## How It Works

1. **Home Page**: The home page includes the hero section, features section, testimonials section, and footer. It provides an overview of the services offered.
2. **Start Page**: The start page includes a call-to-action to get pre-approved for a mortgage.
3. **About Page**: The about page provides information about the company (to be implemented).
4. **Mortgage Calculator Page**: The mortgage calculator page allows users to calculate their estimated monthly mortgage payments.

## Running the Project

To run the project, follow these steps:

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install the dependencies using `npm install`.
4. Start the development server using `npm start`.

The application will be available at `http://localhost:3000`.

````
