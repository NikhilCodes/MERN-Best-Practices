import React from 'react';
import AppBar from './component/AppBar';
import Feed from './component/Feed';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
