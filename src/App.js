import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import BooksSection from './components/BooksSection';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BooksSection />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
