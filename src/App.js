import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './bootstrap.min.css';


  function Hero(){
    return (
      <div className="row">
        <div className="jumbotron col-10 offset-1">
          <h1>Author Quiz</h1>
          <p>Select the book written by the author shown</p>
        </div>
      </div>
    )
  }

function Turn({ author, books, highlight, answerSelected}){
  //the answerSelected parameter is a function
    //choose wh
    function highlightBG(highlight){
      const mapping = {
        'none': '',
        'correct': 'green',
        'wrong' : 'red'
      }
      return mapping[highlight];

    }
    return (
      <div className="row turn" style={{backgroundColor: highlightBG(highlight)}}> 
        <div className="col-4 offset-1">
            <img src={author.imageUrl} className="authorimage" alt="Author"/>
        </div>
        {/* Show ang mga books title, nga random 
          when clicked, answerSelected is trigger
        */}
        <div className="col-6">
          {books.map((title) => 
            <Book title={title} key={title} onClick={answerSelected} />)
          }
        </div>
      </div>
    );
  }

  // Specifyinf the paramater of turn, para way libog
  Turn.propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      imageSource: PropTypes.string.isRequired,
      books: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    answerSelected: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
  };

  function Book ({title, onClick}){
    //the onclick parameter is the function
    // onClick inside the div is a prop, thats how u gonaa use them with ()
    return (
      <div className="answer" onClick={() => onClick(title)}>
        <h4>{title}</h4>
      </div>
    )
  }


  function Continue() {
    return (
      <div></div>
    )
  }

  function Footer(){
    return (
      <div id="footer" className="row">
        <div className="text-muted credit">All images are from <a href="https://commons.wikimedia.org/">Wikemedia Common</a></div>
      </div>
    )
  }

function App({ turnData, highlight, answerSelected }) {
 
  return (
    <div className='container-fluid'> 
        <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight} answerSelected={answerSelected}/>
        <Continue />
        <Footer />
        </div>
    </div>
  );
}

export default App;
