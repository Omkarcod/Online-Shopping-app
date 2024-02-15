import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Component/Navbar';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>

      </Provider>
     
   
    </div>
  );
}

export default App;
