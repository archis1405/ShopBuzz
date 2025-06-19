import logo from './logo.svg';
import './App.css';
import NavigationBar from './Client/Components/NavigationBar/navigationBar';
import HomePage from './Client/Pages/Home/homePage';
import Footer from './Client/Components/Footer/Footer';
import Product from './Client/Components/Product/Product';
import ProductDetails from './Client/Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
     <NavigationBar />
       <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
       </div>
         <Footer />
    </div>
  );
}

export default App;
