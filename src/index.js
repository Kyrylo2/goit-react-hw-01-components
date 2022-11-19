import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { SocialProfile } from 'components/01-socialProfile';
import user from './user.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(user);
