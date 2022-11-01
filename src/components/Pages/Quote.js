import React, { useState } from 'react';
import './page.css';

function Quote() {
  const [state, setState] = useState({
    id: 1,
    author: 'Public Quotes',
    quote: 'Mathematics is the queen of science, and arithmetic the queen of mathematics.',
  });

  // Generate randmon Quotes

  const quoteApi = async () => {
    const response = await fetch('https://random-math-quote-api.herokuapp.com/');

    const { id, author, quote } = await response.json();

    setState({ id, author, quote });
    return { id, author, quote };
  };
  const { author, quote } = state;
  return (
    <div className="quoteContainer">
      <div className="generator">
        <figure>
          <blockquote>
            <p>
              &quot;
              {quote}
              {' '}
              &quot;
            </p>
          </blockquote>
          <figcaption>
            —
            {author}
          </figcaption>
        </figure>

      </div>
      <button
        className="btn btn-outline-info"
        type="button"
        onClick={quoteApi}
      >
        Get Random Quote
      </button>
    </div>
  );
}

export default Quote;
