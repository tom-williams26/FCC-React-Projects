import React, { useEffect, useState } from 'react';
import '../styles/sass/main.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import useAxiosFetch from '../utils/useAxiosFetch';

const colors = [
  '#C7EAE4',
  '#A7E8BD',
  '#FCBCB8',
  '#EFA7A7',
  '#FFD972',
  '#9F9AA4',
  '#DA4167',
  '#3D2645',
  '#0EAD69',
  '#EE4266',
  '#B4A6AB',
];

const RandomNumberGenerator = (array) => {
  let randomNum = Math.floor((Math.random() * array.length));
  while (randomNum === array[randomNum]) {
    randomNum = Math.floor((Math.random() * array.length));
  }
  return randomNum;
};

const FilterApiData = (results) => results?.map((item) => {
  const { quote } = item;
  const { author } = item;
  return [quote, author];
});

function RenderQuote(quotes, randomColorNum) {
  const randomQuoteNum = RandomNumberGenerator(quotes);

  return (
    <div id="quote-container">
      <h1 id="text" style={{ color: colors[randomColorNum] }}>
        {quotes[randomQuoteNum][0]}
      </h1>
      <p id="author" style={{ color: colors[randomColorNum] }}>
        <span id="author-dash" style={{ color: colors[randomColorNum] }}>-</span>
        {quotes[randomQuoteNum][1]}
      </p>
    </div>
  );
}

function RandomQuoteMachine() {
  // const apiUrl = 'https://api.quotable.io/quotes';
  const apiUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  const { data, loading, error } = useAxiosFetch(apiUrl);
  const [quotes, setQuotes] = useState(null);
  const [html, setHtml] = useState(null);

  const randomColorNum = RandomNumberGenerator(colors);

  useEffect(() => {
    if (data) setQuotes(FilterApiData(data.quotes));
  }, [data]);

  useEffect(() => {
    if (quotes) setHtml(RenderQuote(quotes, randomColorNum));
  }, [quotes, randomColorNum]);

  return (
    <div id="wrapper" style={{ backgroundColor: colors[randomColorNum] }}>
      <div id="quote-box">
        {loading
				 
				 
				 
				 ? <h1>Loading quotes...</h1>
				  : html}
        <div id="button-container">
          <a
            id="tweet-quote"
            className="button"
            href="twitter.com/intent/tweet"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="twitter-icon"
              style={{ color: colors[randomColorNum] }}
            />
          </a>

          <button
            id="new-quote"
            className="button"
            style={{ backgroundColor: colors[randomColorNum] }}
            onClick={() => setHtml(RenderQuote(quotes, randomColorNum))}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuoteMachine;
