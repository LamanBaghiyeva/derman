import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './Components/Navbar';
import Section from "./Components/Section";
import Info from "./Components/Info";
import Telimat from "./Components/Telimat"
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Info />
      <Telimat />
      <Footer />
    </div>
  );
}

export default App;
