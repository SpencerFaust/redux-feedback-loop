import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//Compnents
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comment from '../Comment/Comment';
import Home from '../Home/Home';
import Success from '../Success/Success';
import Review from '../Review/Review';

class App extends Component {

handleClick = (event) => {
  event.preventDefault();
  console.log('Button clicked.');
  this.props.history.push('/Feeling');
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/Understanding' component={Understanding} />
            <Route exact path='/Feeling' component={Feeling} />
            <Route exact path='/Supported' component={Supported} />
            <Route exact path='/Comment' component={Comment} />
            <Route exact path='/Success' component={Success} />
            <Route exact path='/Review' component={Review} />
          </div>
        </Router>
        <br/>
        
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);