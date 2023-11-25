import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Aos from "aos";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
