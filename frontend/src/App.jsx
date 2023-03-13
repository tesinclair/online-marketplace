import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './views/MainPage.jsx';
import Checkout from './views/Checkout.jsx';
import Create from './views/Create.jsx';
import Login from './views/Login.jsx';
import OrderTracking from './views/OrderTracking.jsx';
import NavBar from './components/NavBar.jsx';

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
