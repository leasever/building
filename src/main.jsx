import React from 'react'
import ReactDOM from 'react-dom/client'
// import "./index.css";
import './styles/_main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Error from './routes/Error'
import Project from './routes/Project'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: 'contacts/:contactid',
        element: <Contact />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/project',
    element: <Project />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
