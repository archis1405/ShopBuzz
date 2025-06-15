import logo from './logo.svg';
import './App.css';
import NavigationBar from './Client/Components/NavigationBar/navigationBar';
import HomePage from './Client/Pages/Home/homePage';

function App() {
  return (
    <div className="App">
     <NavigationBar />
       <div>
        <HomePage />
       </div>
    </div>
  );
}

export default App;
