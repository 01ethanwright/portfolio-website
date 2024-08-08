import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import AboutMe from  './AboutMe/AboutMe';
import Projects from './Projects/Projects';
// import YouTube from './YouTube/YouTube';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/youtube' element={<YouTube />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
