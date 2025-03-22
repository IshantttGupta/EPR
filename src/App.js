import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/sidebar';   
//import Navbar from "./components/Navbar";  // Ensure the correct case
//import Sidebar from "./components/sidebar"; // Also check Sidebar


function App() {
  return (
    <div>
      <Header />
      <Hero />
       <Sidebar />
      {/* <Navbar /> } */}
    </div>
  );
}

export default App;
