import React from 'react';
import './App.css';
import './bootstrap.min.css'

/*function AuthorQuiz(props) {
  return (
    <div>
      Author Quiz
    </div>
  );
}*/

// class AuthorQuiz extends React.Component {

//   render() {
//     return (
//       <div>
//         Author Quiz  {this.props.name} - {this.props.age}
//       </div>
//     )
//   }
// }
// AuthorQuiz.propTypes = {
//   name: PropType.string,
//   age: PropType.number
// };
// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: 'Newman' }
//   }
//   render() {
//     return (
//       <div>
//         {this.props.isVisible ? this.props.children : null}
//       </div>
//     )
//   }
// }

// //This is the component call from another component
// <Test isVisible={true}>
//           <div id="ttt">Test Child</div>
// </Test>

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  )
}

function Book({ title, key }) {
  return (
    <div className="answer">
      <h4>{title}</h4>
    </div>
  )
}
function Turn({ author, books }) {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
        <p>{author.name}</p>
      </div>

      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} />)}
      </div>
    </div>
  )
}

function Continue() {
  return (
    <div>Test</div>
  )
}

function Footer() {
  return (
    <div id="footer" className="row">
      <div className="text-muted credit">
        All images are from <a href="http://common.wikimedia.org/wiki/Main">Wikemedia Commons and are in the public domain</a>
      </div>
    </div>
  )
}
function AuthorQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  )
}

export default AuthorQuiz;
