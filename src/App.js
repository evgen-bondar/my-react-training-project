import React from 'react';
import './App.css';
import  Header from './components/Header/Header1.jsx';
import Navbar from './components/Navbar/Navbar1.jsx';
import Profile from './components/Profile/Profile1.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>);
}



export default App;
