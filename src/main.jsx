import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
import Authprovider from './Authprovider/Authprovider.jsx'
import Order from './Components/Order/Order.jsx'
import PrivateRouter from './Router/PrivateRouter.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Profile from './Components/Profile/Profile.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/order',
        element:<PrivateRouter><Order></Order></PrivateRouter>
      },
      {
        path:"/dashboard",
        element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>
      },
      {
        path:"/profile",
        element:<PrivateRouter><Profile></Profile></PrivateRouter>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
