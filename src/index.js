import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Context動作確認用
import { AuthContextProvider } from './contexts/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
