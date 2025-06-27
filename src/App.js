import logo from './logo.svg';
import './App.css';
import NavigationBar from './Client/Components/NavigationBar/navigationBar';
import HomePage from './Client/Pages/Home/homePage';
import Footer from './Client/Components/Footer/Footer';
import Product from './Client/Components/Product/Product';
import ProductDetails from './Client/Components/ProductDetails/ProductDetails';
import Cart from './Client/Components/Cart/Cart';
import Checkout from './Client/Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
     <NavigationBar />
       <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout />
       </div>
         <Footer />
    </div>
  );
}

export default App;
