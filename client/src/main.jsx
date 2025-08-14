// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { AppContextProvider } from './context/AddContext.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import React from 'react';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <AppContextProvider>
//     <App />
//   </AppContextProvider>
//   </BrowserRouter>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import {ClerkProvider} from '@clerk/clerk-react'
import { AppContext, AppContextProvider } from './context/AppContext';


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <AppContextProvider>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'}>
    <App />
    
    </ClerkProvider>
    </AppContextProvider>
  </BrowserRouter>
);
