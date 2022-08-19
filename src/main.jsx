import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Need these env variables to be set for this to work
// gives us the ability to use a alt language 
window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
