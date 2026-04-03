import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {

  const zurichRouter = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/education", element: <Education /> },
      { path: "/experience", element: <Experience /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
  ])
 

  return (
    <>


    <RouterProvider router={zurichRouter} />  



     </>
  )
}

export default App
