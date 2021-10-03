import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import MainCareer from './components/MainCareer';
import Lang from './components/Lang-frameworks';
import LangSkill from './components/Lang-skills';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MainCareer/>
      <Lang/>
      <LangSkill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
