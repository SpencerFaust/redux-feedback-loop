import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {

handleClick =(event) => {
    event.preventDefault();
    console.log('Button clicked.');
    this.props.history.push('/Feeling')
};

  render() {
    return (
      <div>
          Leave Feedback <br/>
          <button onClick={this.handleClick}>New Feedback</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Home);