import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// indexHTML内のid=rootの要素を取得
const root = ReactDOM.createRoot(document.getElementById('root'));
// innerHTMlみたいなもの
root.render(
  // React.StrictModeはLaravelの＠CSRFみたいなもの
  // App.jsが出力される
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

