import {Route,Routes } from 'react-router-dom';
import './App.css';
import CoinDetails from './Components/Pages/CoinDetails';
import Coins from './Components/Pages/Coins';
import Exchanges from './Components/Pages/Exchanges';
import Footer from './Components/Pages/Footer';
import Home from './Components/Pages/Home';
import Header from './Components/Pages/Header';

function App() {
  return (
    <div className="App">
            <Header/>
            <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/coins" element={<Coins/>} />
                  <Route path="/exchanges" element={<Exchanges/>} />
                  <Route path="/coin/:id" element={<CoinDetails/>} />
            </Routes>
            <Footer/>
    </div>
  );
}

export default App;
