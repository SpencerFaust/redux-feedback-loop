import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {

  state = {
    value: false,
  }

componentDidMount() {
    this.onReady();
}

onReady = () => {
    this.props.dispatch({ type: 'REQUEST'})
    console.log(this.props.feedback);
;}

finalized = () => {
  if (this.props.feedback.comment === '') {
    console.log('Comment filled out.');
    return true;
  } else {
    return false;
  };
};

handleSubmit = (event) => {
  event.preventDefault();
  
  this.props.history.push('/Success');
}

  render() {
    return (
      <div className="reviewDiv">
          <h3>Review your Feedback</h3>
          Feeling: {this.props.feedback.feeling}              <br/>
          Understanding: {this.props.feedback.understanding}       <br/>
          Support: {this.props.feedback.supported}             <br/>
          Comments: <br/> {this.props.feedback.comment} <br/>
          <button id="submitButton" onClick={this.handleSubmit} disabled={this.finalized()}>Submit Feedback</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Review);