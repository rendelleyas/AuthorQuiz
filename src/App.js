import React from 'react';
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

  function Turn({author, books, highlight}){

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
        <div className="col-6">
          {books.map((title) => <Book title={title} key={title}/>)}
        </div>
      </div>
    );
  }

  function Book ({title}){
    return (
      <div className="answer">
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

function App({ turnData, highlight }) {
  return (
    <div className='container-fluid'> 
        <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight}/>
        <Continue />
        <Footer />
        </div>
    </div>
  );
}

export default App;
