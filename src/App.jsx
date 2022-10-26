import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.jsx";
import './index.css';
import Homesection from './Landing/Homesection';


function App() {

  return (
    <div className="App">
        <Navbar />   
        <Homesection /> 
    </div>
  )
}

export default App
