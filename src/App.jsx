import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MenuNavbar from './components/MenuNavbar';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <MenuNavbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
