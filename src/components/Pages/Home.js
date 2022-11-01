import React, { PureComponent } from 'react';
import './page.css';

class Home extends PureComponent {
  render() {
    return (
      <div className="card">
        <div className="banner">
          <div className="home-details">
            <h1 className="h1">Welcome to our page!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet
              consequuntur possimus, nulla id praesentium porro voluptatum
              laboriosam rerum ullam ipsa. Iusto alias quas, distinctio iste
              voluptates assumenda exercitationem obcaecati.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet
              consequuntur possimus, nulla id praesentium porro voluptatum
              laboriosam rerum ullam ipsa. Iusto alias quas, distinctio iste
              voluptates assumenda exercitationem obcaecati.
            </p>
            <div className="homee"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
