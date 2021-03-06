import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
