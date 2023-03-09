import './App.css';
import MainPage from './pages/MainPage.js';
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
