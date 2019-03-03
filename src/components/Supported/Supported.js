import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from '../Review/Review';


class Supported extends Component {
  state = {
    supported: '',
  };

handleChange = (event) => {
  this.setState({
    supported: event.target.value,
  });
  console.log(event.target.value);
};

handleSubmit = (event) => {
  if (this.state.supported === '') {
    alert('Please select a number.')
  } else {
  event.preventDefault();
  console.log('Sending to dispatch:', this.state.supported);
  this.props.dispatch({ type: 'SUPPORTED', payload: this.state.supported})
  this.props.history.push('/Comment');
  }
}

  render() {
    return (
      <div >
          <div className="feedbackDiv">
          How supported do you feel? <br/>
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

export default connect(mapReduxStateToProps)(Supported);