import HomePage from "./components/HomePage/HomePage";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import About from "./components/About/About";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/contact", element: <Contact /> },
        { path: "/resume", element: <Resume /> },
        { path: "/projects", element: <Projects /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
