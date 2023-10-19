import './App.css';
import {Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Cart } from './components/pages/cart/cart';
import { Shop } from './components/pages/shop/shop';
import { ShopContextProvider } from './context/shopcontext';



function App() {
  return <div class="App">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Shop />} />
           <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </Router>
     </ShopContextProvider>
  </div>;
}

export default App;
