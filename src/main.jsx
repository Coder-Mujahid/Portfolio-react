import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import Skill from './component/Skill.jsx';
import Project from './component/Project.jsx';
import Blogs from './component/Blogs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/Skill",
        element: <Skill></Skill>
      },
      {
        path:"/Project",
        element: <Project></Project>
      },
      {
        path:"/Blogs",
        element: <Blogs></Blogs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
