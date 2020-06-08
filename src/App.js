import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="header"><Header></Header></div>
      <div className="profile"><Profile></Profile></div>
      <div className="footer"><Footer></Footer></div>
    </div>
  );
}

export default App;
