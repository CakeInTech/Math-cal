import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (events) => {
    const { value } = events.target;
    const answer = calculate(state, value);
    setState(answer);
  };

  const showAnswer = (events) => {
    setState({
      total: events.target.value,
    });
  };

  const { total, next, operation } = state;
  return (
    <div className="main">
      <div className="min-calculator">
        <div className="screen" onChange={showAnswer}>
          {total}
          {operation}
          {next}
        </div>
        <div className="button-row one">
          <input type="button" value="AC" onClick={handleClick} />
          <input type="button" value="+/-" onClick={handleClick} />
          <input type="button" value="%" onClick={handleClick} />
          <input type="button" value="÷" className="colored" onClick={handleClick} />
        </div>
        <div className="button-row two">
          <input type="button" value="7" onClick={handleClick} />
          <input type="button" value="8" onClick={handleClick} />
          <input type="button" value="9" onClick={handleClick} />
          <input type="button" value="x" className="colored" onClick={handleClick} />
        </div>
        <div className="button-row three">
          <input type="button" value="4" onClick={handleClick} />
          <input type="button" value="5" onClick={handleClick} />
          <input type="button" value="6" onClick={handleClick} />
          <input type="button" value="-" className="colored" onClick={handleClick} />
        </div>
        <div className="button-row four">
          <input type="button" value="1" onClick={handleClick} />
          <input type="button" value="2" onClick={handleClick} />
          <input type="button" value="3" onClick={handleClick} />
          <input type="button" value="+" className="colored" onClick={handleClick} />
        </div>
        <div className="button-row five">
          <input type="button" value="0" className="special" onClick={handleClick} />
          <input type="button" value="." onClick={handleClick} />
          <input type="button" value="=" className="colored" onClick={handleClick} />
        </div>

      </div>
    </div>
  );
}

export default Calculator;
