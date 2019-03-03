import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Review from '../Review/Review';


class Success extends Component {

handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/');
}

  render() {
    return (
      <div >
          <div className="feedbackDiv">
          <h1>Thank you for your feedback.</h1>
          <button onClick={this.handleSubmit}>Leave more feedback.</button>
          </div>
          Your feedback submission:
          <Review />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Comment);