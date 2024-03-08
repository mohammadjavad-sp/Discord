import Blog from "./Pages/Blog/Blog";
import Careers from "./Pages/Careers/Careers";
import Discover from "./Pages/Discover/Discover";
import Product from "./Pages/Discover/Filters/Product";
import Download from "./Pages/Download/Download";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Nitro from "./Pages/Nitro/Nitro";
import Safety from "./Pages/Safety/Safety";
import Support from "./Pages/Support/Support";

const routes = [
  { path: "/Discord/", element: <Home /> },
  { path: "/Discord/Download", element: <Download /> },
  {
    path: "/Discord/Nitro",
    element: <Nitro />,
  },
  { path: "/Discord/Discover", element: <Discover /> },
  { path: "/Discord/Discover/:product", element: <Product /> },
  { path: "/Discord/Safety", element: <Safety /> },
  { path: "/Discord/Support", element: <Support /> },
  { path: "/Discord/Blog", element: <Blog /> },
  { path: "/Discord/Careers", element: <Careers /> },
  { path: "/Discord/Login", element: <Login /> },
];
export default routes;
