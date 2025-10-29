import SignIn from './signIn'
import './App.css';
import baga from './elements/image.jpg'

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
       <SignIn/>
    </div>
      <div className="hidden lg:flex w-1/2 h-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${baga})` }}></div>
    </div>
  );
}

export default App;
