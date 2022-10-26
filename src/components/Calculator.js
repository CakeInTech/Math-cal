import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

   handleClick = (event) => {
     const value = event.target;
     const answer = calculate(this.state, value);
     this.setState(answer);
   }

   showAnswer = (events) => {
     this.setState({
       total: events.target.value,
     });
   }

   render() {
     const { total, next, operation } = this.state;
     return (
       <div className="main">
         <div className="min-calculator">
           <div className="screen" onChange={this.showAnswer}>
             {total}
             {operation}
             {next}
           </div>
           <div className="button-row one">
             <input type="button" value="AC" onClick={this.handleClick} />
             <input type="button" value="+/-" onClick={this.handleClick} />
             <input type="button" value="%" onClick={this.handleClick} />
             <input type="button" value="÷" className="colored" onClick={this.handleClick} />
           </div>
           <div className="button-row two">
             <input type="button" value="7" />
             <input type="button" value="8" />
             <input type="button" value="9" />
             <input type="button" value="*" className="colored" onClick={this.handleClick} />
           </div>
           <div className="button-row three">
             <input type="button" value="4" onClick={this.handleClick} />
             <input type="button" value="5" onClick={this.handleClick} />
             <input type="button" value="6" onClick={this.handleClick} />
             <input type="button" value="-" className="colored" onClick={this.handleClick} />
           </div>
           <div className="button-row four">
             <input type="button" value="1" onClick={this.handleClick} />
             <input type="button" value="2" onClick={this.handleClick} />
             <input type="button" value="3" onClick={this.handleClick} />
             <input type="button" value="+" className="colored" onClick={this.handleClick} />
           </div>
           <div className="button-row five">
             <input type="button" value="0" className="special" onClick={this.handleClick} />
             <input type="button" value="." onClick={this.handleClick} />
             <input type="button" value="=" className="colored" onClick={this.handleClick} />
           </div>

         </div>
       </div>
     );
   }
}

export default Calculator;
