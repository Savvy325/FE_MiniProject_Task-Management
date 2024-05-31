import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from 'react-router-dom';


const domain = 'dev-5vsbff78trq3yxwz.us.auth0.com'
const clientId = 'nmc4m7aDrCGkIJtO7YCEbfNQFE66rF0S'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
