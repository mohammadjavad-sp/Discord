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
  { path: "/discord/", element: <Home /> },
  { path: "/discord/Download", element: <Download /> },
  {
    path: "/discord/Nitro",
    element: <Nitro />,
  },
  { path: "/discord/Discover", element: <Discover /> },
  { path: "/discord/Discover/:product", element: <Product /> },
  { path: "/discord/Safety", element: <Safety /> },
  { path: "/discord/Support", element: <Support /> },
  { path: "/discord/Blog", element: <Blog /> },
  { path: "/discord/Careers", element: <Careers /> },
  { path: "/discord/Login", element: <Login /> },
];
export default routes;
