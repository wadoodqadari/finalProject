import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './Home';
import OurWork from './pages/OurWork'
import { Navbar } from 'reactstrap';
function App() {
  return (
  
  <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' exact element={<Home />} />
       <Route path='/ourwork' element={<OurWork/>} />
      {/* <Route path='/about' element={<About/>} /> */}
      {/* <Route path='/contact' element={<Contact/>} /> */}
      {/* <Route path='/blogs' element={<Blogs/>} /> */}
      {/* <Route path='/donation' element={<Donation/>} />  */}
    </Routes>
    </Router>
 
 
  );
}

export default App;
