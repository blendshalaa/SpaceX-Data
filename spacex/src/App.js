import Dragons from './pages/Dragons';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import NotFound from './pages/NotFound';
import Rockets from './pages/Rockets';
import './styles/app.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/dragons',
    element: <Dragons />,
    errorElement: <NotFound />
  }
  , {
    path: '/missions',
    element: <Missions />,
    errorElement: <NotFound />
  }, {
    path: '/profiles',
    element: <MyProfile />,
    errorElement: <NotFound />
  },
  {
    path: '/',
    element: <Rockets />,
    errorElement: <NotFound />
  }
])


function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
