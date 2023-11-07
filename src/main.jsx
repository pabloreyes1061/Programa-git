import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Principal from './routes/principal.jsx'
import {Store} from './routes/store.jsx'
import Login from "./routes/login";
import Register from './routes/register'

const routers = createBrowserRouter([
  {
    path: "/", 
    element: <Principal />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/store",
     element: <Store />
    //  <Store />
  },
  {
    path: "/register",
    element:<Register/>,
  }
])




ReactDOM.createRoot(document.getElementById('container-general')).render(
  <React.StrictMode>
   
    <RouterProvider router={routers}/>

  </React.StrictMode>,
)



