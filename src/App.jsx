import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add your theme styles here
import Weather from './Components/Weather';


const App = () => {
  // State for theme
  const [darkMode, setDarkMode] = React.useState(false);

  // Apply the theme class to the body
  React.useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  // Toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
  <>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
      >
        <Container>
          <Navbar.Brand href="#">Weather App </Navbar.Brand>
          <Button
            variant={darkMode ? 'dark' : 'light'}
            onClick={toggleTheme}
            className="d-flex align-items-center"
          >
            {darkMode ? <FaSun className="me-2" /> : <FaMoon className="me-2" />}
          </Button>
        </Container>
      </Navbar>
      <Weather />
    
   
      </>
  );
};

export default App;
