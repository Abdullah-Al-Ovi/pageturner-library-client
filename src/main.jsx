import React from 'react'
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import './index.css'
import Router from './Router/Router.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <AuthProvider>
   <RouterProvider router={Router}></RouterProvider>
   </AuthProvider>
    
  </React.StrictMode>,
)
