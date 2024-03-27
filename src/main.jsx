import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import List from './components/List/List';
import Read from './components/Read/Read';
import ComingSoon from './components/ComingSoon/ComingSoon';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/list',
        element: <List></List>
      },
      {
        path: '/read',
        element: <Read></Read>
      },
      {
        path: '/newbooks',
        element: <ComingSoon></ComingSoon>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
