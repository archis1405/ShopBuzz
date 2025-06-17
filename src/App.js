import logo from './logo.svg';
import './App.css';
import NavigationBar from './Client/Components/NavigationBar/navigationBar';
import HomePage from './Client/Pages/Home/homePage';
import Footer from './Client/Components/Footer/Footer';
import Product from './Client/Components/Product/Product';

function App() {
  return (
    <div className="App">
     <NavigationBar />
       <div>
        {/* <HomePage /> */}
        <Product />
       </div>
         <Footer />
    </div>
  );
}

export default App;
