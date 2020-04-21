import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';
// import PropTypes from 'prop-types'; 

const authors = [

  //use require to read that this link is an image
  {
    name: 'Mark Twain',
    imageUrl: require('./images/authors/marktwain.jpg'),
    imageSource: 'Wikemedia Commons',
    books: [
      'The Adventure of Huckleberry Finn',
      'Life on the Mississipi',
      'Roughing'  
    ]
  },
  {
    name: 'Jospeh Conrad',
    imageUrl: require('./images/authors/josephconrad.jpg'),
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K Rowling',
    imageUrl: require('./images/authors/jkrowling.jpg'),
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerer stone']
  },
  {
    name: 'Stephen King',
    imageUrl: require('./images/authors/stephenking.jpg'),
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['the shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: require('./images/authors/charlesdickens.png'),
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: require('./images/authors/williamshakespear.jpg'),
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet ']
  }
];

//data na e send sa main app.js, which is array sya: compose of array of data
const state = {
  //pass to a function
  turnData: getTurnData(authors), //array ni sya
  highlight: ''
};


function getTurnData(authors){
  //slice array to pick only the books row/column
  const allBooks = authors.reduce(function (p,c,i ){
    return p.concat(c.books);
  }, []);

  //picking up the 4 random books
  const fourRandomBooks = shuffle(allBooks).slice(0,4);

  //ang answer sa 4 ka random pick, is stored
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    
    author: authors.find((author) => 
      author.books.some((title) => title === answer)
    )
  }
}

function answerSelected(title) {
  const isCorrect = state.turnData.author.books.some((book) => book === title);
  state.highlight = isCorrect? 'correct': 'wrong';
  console.log(title);
  render(); //nag render sya kay di ma detect sa app nga na change and value sa highligts
}

function AddAuthorForm({match}) {
  return (
    <div className='container-fluid' >
      <h1>Add Author</h1>
      <p>{JSON.stringify(match)}</p>
    </div>
  );
}

//return the app, pwede pd ud drtso na
function Main() {
  return <App {...state} answerSelected={answerSelected} />;
}


function render () {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/add" component={AddAuthorForm}></Route>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();
serviceWorker.unregister();
