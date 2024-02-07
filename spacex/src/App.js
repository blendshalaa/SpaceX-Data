import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Dragons from './pages/Dragons';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import NotFound from './pages/NotFound';
import Rockets from './pages/Rockets';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profiles" element={<MyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
