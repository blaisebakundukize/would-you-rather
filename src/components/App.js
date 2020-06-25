import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import handleInitialData from "../actions/shared";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className='container'>
          {this.props.loading === true ? null : (
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/question/:id' component={QuestionPage} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
