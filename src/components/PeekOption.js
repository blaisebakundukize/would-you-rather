import React, { Component } from "react";

class PeekOption extends Component {
  state = {
    selectedOption: null,
  };

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitOption(this.state.selectedOption);
  };

  render() {
    const { options } = this.props;
    const optionKeys = Object.keys(options);

    return (
      <>
        <h3 className='question-title'>Would you rather...</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-radio-group'>
            {optionKeys.map((key) => (
              <label key={options[key]}>
                <input
                  type='radio'
                  value={key}
                  checked={this.state.selectedOption === key}
                  onChange={this.handleOptionChange}
                />
                <span>{options[key]}</span>
              </label>
            ))}
          </div>
          <input
            className='btn btn-green btn-submit'
            type='submit'
            value='Submit'
            disabled={this.state.selectedOption === null}
          />
        </form>
      </>
    );
  }
}

export default PeekOption;
