import React from 'react';
import Calculator from './components/Calculator';
import './index.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Calculator Page</h1>
        <Calculator />
      </>
    );
  }
}

export default App;
