import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RocketPage from "./pages/Rocket";
import Dragons from "./pages/Dragons";
import Missions from "./pages/Missions";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import './styles/app.css'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RocketPage />,
      },
      {
        path: "/missions",
        element: <Missions />,
      },
      {
        path: "/dragons",
        element: <Dragons />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
