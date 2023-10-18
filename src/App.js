import './App.css';
import {Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Cart } from './components/pages/cart/cart';
import { Shop } from './components/pages/shop/shop';



function App() {
  return <div class="App">
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Shop />} />
           <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </Router>
  </div>;
}

export default App;
