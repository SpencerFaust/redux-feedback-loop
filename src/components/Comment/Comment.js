import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from '../Review/Review';


class Comment extends Component {
  state = {
    comment: '',
  };

handleChange = (event) => {
  this.setState({
    comment: event.target.value,
  });
  console.log(event.target.value);
};

handleSubmit = (event) => {
  if (this.state.comment === '') {
    alert('Please enter a comment.')
  } else {
  event.preventDefault();
  console.log('Sending to dispatch:', this.state.comment);
  this.props.dispatch({ type: 'COMMENT', payload: this.state.comment})
  }
}

  render() {
    return (
      <div >
          <div className="feedbackDiv">
          Do you have any aditional comments? <br/>
          <textarea id="commentInput" placeholder="Leave comment here." onChange={this.handleChange} ></textarea>
          <br/>
          <button onClick={this.handleSubmit}>Finalize</button>
          </div>
          <Review />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Comment);