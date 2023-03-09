import './App.css';
import ReactDOM from "react-dom/client";
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
      <MainPage />
    </div>
  );
}

export default App;
