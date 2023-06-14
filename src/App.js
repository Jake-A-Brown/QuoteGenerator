import QuoteBox from './Quote/QuoteBox';
import './App.css';
import React, {useState} from 'react';

const quoteData=[
  {text:`'The only way to do great work is to love what you do.'`, author:' Steve Jobs'},
  {text:`'In three words I can sum up everything I've learned about life: it goes on.'`, author:'Robert Frost'},
  {text:`'The best way to predict the future is to create it.'`, author:'Peter Drucker'},
  {text:`'Success is not final, failure is not fatal: It is the courage to continue that counts.'`, author:'Winston Churchill'},
  {text:`'Be yourself; everyone else is already taken.'`, author:'Oscar Wilde'}
];

const getRandomIndex=()=>
Math.round(Math.random() * ((quoteData.length-1)-0)+0);

function App() {
  const[quote, setQuote]=useState(quoteData[getRandomIndex()]);

  const handleNewQuote=()=>{
    setQuote(quoteData[getRandomIndex()]);
  };

  return (
    <div className="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
