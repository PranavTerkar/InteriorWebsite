
import './App.css';
import Navbars from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';
import Offer from './Components/Offer';
import Footer from './Components/Footer';
import Projects from './Components/Mainprojects';
import Bigproject from './Components/Bigproject';
function App() {
  return (
    <div className="App">
      <Navbars/>
      <Home/>
      <Offer/>
      <Bigproject/>
      <Feedback/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
