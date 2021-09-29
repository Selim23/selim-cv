import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import MainCareer from './components/MainCareer';
import Navbar from './components/Navbar';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MainCareer/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
