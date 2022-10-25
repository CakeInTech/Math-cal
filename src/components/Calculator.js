import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="main">
        <div className="min-calculator">
          <div className="screen">
            <input type="text" />
          </div>
          <div className="button-row one">
            <input type="button" value="AC" />
            <input type="button" value="+/-" />
            <input type="button" value="%" />
            <input type="button" value="÷" className="colored" />
          </div>
          <div className="button-row two">
            <input type="button" value="7" />
            <input type="button" value="8" />
            <input type="button" value="9" />
            <input type="button" value="*" className="colored" />
          </div>
          <div className="button-row three">
            <input type="button" value="4" />
            <input type="button" value="5" />
            <input type="button" value="6" />
            <input type="button" value="-" className="colored" />
          </div>
          <div className="button-row four">
            <input type="button" value="1" />
            <input type="button" value="2" />
            <input type="button" value="3" />
            <input type="button" value="+" className="colored" />
          </div>
          <div className="button-row five">
            <input type="button" value="0" className="special" />
            <input type="button" value="." />
            <input type="button" value="=" className="colored" />
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
