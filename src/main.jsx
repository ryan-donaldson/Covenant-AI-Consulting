import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Services from './Pages/Services.jsx';
import RootLayout from "../src/UI/RootLayout.jsx"
import "./data/icons.js";
import About from './Pages/About.jsx';
import CaseStudies from './Pages/CaseStudies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/casestudies", element: <CaseStudies />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

