import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import handleInitialData from "../actions/shared";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import Auth from "./Auth";
import Layout from "./Layout";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <>
        {this.props.loading === true ? null : (
          <Layout>
            <Switch>
              <>
                <Route path='/auth' component={Auth} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/question/:id' component={QuestionPage} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/' exact component={Dashboard} />
              </>
            </Switch>
          </Layout>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
