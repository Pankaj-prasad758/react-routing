import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./Component/Home/Home"
import About from "./Component/About/About"
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    Children:[
      {
        path:"",
        element:<Home/>
      },{
        element:"about",
        path: <About/>
      }
    ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
