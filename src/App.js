// import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import Footer from './componants/Footer';
import About from './componants/About';
import Services from './componants/Services';
import Contact from './componants/Contact';
import Products from './componants/Products';
import Register from './componants/Register';
import Cart from './componants/Cart';
import Login from './componants/Login';
import Product from './componants/Product';
import { Route,Routes,useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();

  // Check if the current path is one where the footer should not be displayed
  const hideFooter = location.pathname === '/login' || location.pathname === '/register';
  return (
    <div className="App">
       <Navbar/>
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}></Route>
 <Route path='/services' element={<Services/>}></Route>
 <Route path='/products' element={<Products/>}></Route>
 <Route path='/contact' element={<Contact/>}></Route>
 <Route path='/cart' element={<Cart/>}></Route>
 <Route path='/products/:id' element={<Product/>}></Route>
   
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    </Routes>
    {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
