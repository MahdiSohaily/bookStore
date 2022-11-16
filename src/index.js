import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import NoPage from './pages/NoPage';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Books />} />
            <Route path="categories" element={<Categories />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
