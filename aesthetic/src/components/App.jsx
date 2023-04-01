import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import News from './News/News';
import Contact from './Contact/Contact';



class App extends Component {
  state = {  } 
  render() { 
    return (
      <BrowserRouter>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" exact="true">Start</NavLink></li>
            <li><NavLink to="/news">Aktualności</NavLink></li>
            <li><NavLink to="/contact">Kontakt</NavLink></li>
          </ul>
        </nav>
        </header>
          <section>
            <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/news" element={<News/>} />
              <Route path="/contact" element={<Contact/>} />
              </Routes>
        </section>
      </div>
    </BrowserRouter>
    );
  }
}
 
export default App;