import React from "react";
import { Route, Routes } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from './pages/Home';
import News from './pages/News';
import Header from './components/Header';
import Footer from './components/Footer';

const App = (): JSX.Element => {

  return (
    <div>
      <Helmet>
        <title>App</title>
      </Helmet>
      <Routes>
        <Route path="/" element={(<Header />)} />
        <Route path="/news" element={(<Header />)} />
      </Routes>
      <Routes>
        <Route path="/" element={(<Home />)} />
        <Route path="/news" element={(<News />)} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;