import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Search from './components/Search';
import { React } from 'react';
import Searched from './pages/Searched';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header text="Hooked" />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
