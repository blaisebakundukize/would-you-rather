import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    inputs: {
      optionOne: {
        value: "",
        valid: false,
      },
      optionTwo: {
        value: "",
        valid: false,
      },
    },
    validation: {
      required: true,
      minLength: 5,
    },
    toHome: false,
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.trim().length >= rules.minLength && isValid;
    }

    return isValid;
  };

  handleChange = (event, inputName) => {
    const updatedInputs = {
      ...this.state.inputs,
      [inputName]: {
        ...this.state.inputs[inputName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.validation),
      },
    };
    this.setState({ inputs: updatedInputs });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const question = {
      optionOneText: this.state.inputs.optionOne.value,
      optionTwoText: this.state.inputs.optionTwo.value,
    };
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(question));
    this.setState({ toHome: true });
  };

  render() {
    const { optionOne, optionTwo } = this.state.inputs;
    const { toHome } = this.state;
    if (toHome === true) {
      return <Redirect to='/' />;
    }
    return (
      <div className='question question-new'>
        <div className='question-header'>
          <h2 className='center'>Create New Question</h2>
        </div>
        <div className='question-new-content'>
          <p>Complete the question:</p>
          <h3 className='question-new-form-title'>Would you Rather...</h3>
          <form className='form-question-new' onSubmit={this.handleSubmit}>
            <input
              className='form-input'
              type='text'
              placeholder='Enter Option One Text Here'
              value={optionOne.value}
              onChange={(event) => this.handleChange(event, "optionOne")}
            />
            <div className='form-line-divider'>
              <div className='line-horizontal form-line-horizontal'></div>
              <span className='text-between-line'>OR</span>
              <div className='line-horizontal form-line-horizontal'></div>
            </div>
            <input
              className='form-input'
              type='text'
              placeholder='Enter Option Two Text Here'
              value={optionTwo.value}
              onChange={(event) => this.handleChange(event, "optionTwo")}
            />
            <input
              className='btn btn-green btn-submit'
              type='submit'
              value='Submit'
              disabled={optionOne.valid === false || optionTwo.valid === false}
            />
          </form>
        </div>
        <div>{optionOne.valid}</div>
        <div>{optionTwo.valid}</div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
