import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Pages/Navbar';
import Home from './components/Pages/Home';
import Quote from './components/Pages/Quote';
import './index.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="about" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
