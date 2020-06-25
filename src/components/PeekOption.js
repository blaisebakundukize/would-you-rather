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
      <div>
        <form onSubmit={this.onSubmit}>
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
          <input
            type='submit'
            value='Submit'
            disabled={this.state.selectedOption === null}
          />
        </form>
      </div>
    );
  }
}

export default PeekOption;
