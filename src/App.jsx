import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Weeknav from './components/Navbar/Weeknav.jsx';  
// import Home from './pages/home';
import SignUp from './pages/signup';
import Login from './pages/login';
import coolImage from './assets/cool.jpg';
import SessionForm from './pages/SessionForm.jsx'
import MovieList from './pages/MovieList.jsx';
import SessionList from './pages/SessionList.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='image-container'>
          <img src={coolImage} alt="Cool" style={{ width: '100%', height: 'auto' }} />
        </div>
        <Weeknav />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} />  */}
          <Route path="/session" element={<SessionForm />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/movies" element={<MovieList />} /> 
          <Route path="/sessions" element={<SessionList />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
