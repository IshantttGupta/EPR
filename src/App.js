import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/sidebar';   
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Sidebar />

      {/* Routes for Different Pages */}
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>

    </div>
    
  );
}

export default App;
