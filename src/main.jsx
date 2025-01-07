import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Blog from './components/blog/Blog.jsx'
import Products from './components/products/Products.jsx'
import HowItWorks from './components/how-it-works/HowItWorks.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path:"blog",
        element:<Blog/>
      },
      {
        path:"how-it-works",
        element: <HowItWorks/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
