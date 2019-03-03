import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from '../Review/Review';


class Feeling extends Component {
  state = {
    feeling: '',
  };

handleChange = (event) => {
  this.setState({
    feeling: event.target.value,
  });
  console.log(event.target.value);
};

handleSubmit = (event) => {
  if (this.state.feeling === '') {
    alert('Please select a number.')
  } else {
  event.preventDefault();
  console.log('Sending to dispatch:', this.state.feeling);
  this.props.dispatch({ type: 'FEELING', payload: this.state.feeling})
  this.props.history.push('/Understanding');
  }
}

  render() {
    return (
      <div >
          <div className="feedbackDiv">
          How are you Feeling? <br/>
          <select onChange={this.handleChange} value={this.optionsState}>
            <option value='' selected="selected" disabled>Select</option>  
            <option value='5' value="5">5</option>  
            <option value='4' value="4">4</option>  
            <option value='3' value="3">3</option>  
            <option value='2' value="2">2</option>  
            <option value='1' value="1">1</option>  
          </select><br/>
          <button onClick={this.handleSubmit}>Next</button>
          </div>
          <Review />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Feeling);