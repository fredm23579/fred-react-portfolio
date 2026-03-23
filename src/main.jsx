/**
 * @file main.jsx
 * @description Vite entry point — mounts the React app into #root.
 *
 * To opt into Web Vitals reporting, uncomment the block at the bottom
 * and pass a callback (console.log, or an analytics endpoint).
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// ── Optional Web Vitals reporting ────────────────────────────────────────────
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);   // or pass your analytics send function
