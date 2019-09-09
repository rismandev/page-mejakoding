import React, {Component} from 'react';
import './assets/css/custom-style.css'
import masthead from './assets/illustration/web_developer.svg'

export default class App extends Component {

  render() {

    return (
      <div className="body">

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
          <a className="navbar-brand ml-3" href="#">Meja Koding Resto</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link mr-3" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-3" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-3" href="#">Documentation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-3 btn btn-primary text-white" href="#">Download</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Header with Jumbotron */}
        <div className="jumbotron d-flex">

          <img src={masthead} className="masthead" />

          <div className="mx-5 card-masthead">
            <h1 className="display-5">Meja Koding</h1>
            <p className="lead">Create Your Future With Your code.</p>
            <p>
              Easy order menu with one tap the phone <br/>
              You can Download Applications in Google Play Store
            </p>
            <button className="btn btn-primary mt-3">
              Download Now
            </button>
          </div>

        </div>

      </div>
    )

  }

}

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
