import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/HeaderComponent/Header';
import { Footer } from './Components/FooterComponent/Footer';
import { Sidebar } from './Components/SidebarComponent/Sidebar';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Portfolio } from './Pages/Portfolio/Portfolio';
import { Contact } from './Pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Header/>
        <Routes>
          <Route path="/myresume" element={<Home />} />
          <Route path="/myresume/Home" element={<Home />} />
          <Route path="/myresume/About" element={<About />} />
          <Route path="/myresume/Portfolio" element={<Portfolio />} />
          <Route path="/myresume/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

