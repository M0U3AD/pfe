import SignIn from './signIn'
import './App.css';
import baga from './elements/image.jpg'
import { useState } from 'react';
import Home from './home';
import Right from './right';

function App() {
    const [view, setView] = useState("home");
  return (
    <>
        {view === "home" && <Home onSign={() => setView("sign")} />}
        {view === "sign" && <Right onBack={() => setView("home")} />}
    </>
  )
}

export default App;
