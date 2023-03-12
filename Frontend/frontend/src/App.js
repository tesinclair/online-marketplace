import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage.js';
import Checkout from './pages/Checkout.js';
import Create from './pages/Create.js';
import Login from './pages/Login.js';
import OrderTracking from './pages/OrderTracking';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar loggedIn = {false}/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="create" element={<Create />} />
            <Route path="order-tracking" element={<OrderTracking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
