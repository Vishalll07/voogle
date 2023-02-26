

import React, { useState } from 'react';

import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Routes } from './components/Routes.jsx';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>

  );
};

export default App;