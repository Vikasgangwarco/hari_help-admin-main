import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main app component
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import {Provider} from 'react-redux';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>  {/* Wrap the entire app in Router */}
     <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
