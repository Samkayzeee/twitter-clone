import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';

const router = createBrowserRouter([
  {path:'/', element: <Home />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
