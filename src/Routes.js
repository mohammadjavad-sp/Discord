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
  { path: "/", element: <Home /> },
  { path: "Download", element: <Download /> },
  { path: "Nitro", element: <Nitro /> },
  { path: "Discover", element: <Discover /> },
  { path: "Discover/:product", element: <Product /> },
  { path: "Safety", element: <Safety /> },
  { path: "Support", element: <Support /> },
  { path: "Blog", element: <Blog /> },
  { path: "Careers", element: <Careers /> },
  { path: "Login", element: <Login /> },
];
export default routes;
