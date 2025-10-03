
import './App.css';
import Navbar from './Components/Navbar';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import NewsProvider from './Context/NewsContext';
import Home from './Pages/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <NewsProvider>
        <Router>
     <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   <Footer/>
        </Router>
      </NewsProvider>
    </div>
  );
}

export default App;
