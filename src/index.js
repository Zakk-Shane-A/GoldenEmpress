import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Header from './Header';
import Banner from './Banner';
import Bottom from './Bottom';
import reportWebVitals from './reportWebVitals';
import HeadContact from './Head_contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeadContact />
    <Header />
    <App />
    <Banner />
    <Bottom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
