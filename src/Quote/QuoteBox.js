import React from "react";

const QuoteBox=({quote, handleNewQuote})=>{

    return(
        <div id="quote-box">
            <p id="text">{quote.text}</p>
            <h2 id="author">{quote.author}</h2>
            <div class="actions">
                <button
                id="new-quote"
                class="button"
                onClick={handleNewQuote}
                >New Quote</button>
                <a
                href="https://twitter.com/intent/tweet"
                id="tweet-quote"
                target="_blank" rel="noreferrer"
                >Tweet</a>
            </div>
        </div>
    );
};

export default QuoteBox;