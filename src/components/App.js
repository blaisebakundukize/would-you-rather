import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import handleInitialData from "../actions/shared";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import Auth from "./Auth";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { isAuthed } = this.props;
    return (
      <>
        <Layout>
          <Switch>
            <Route path='/auth' component={Auth} />
            <ProtectedRoute
              isAuthed={isAuthed}
              path='/leaderboard'
              component={Leaderboard}
            />
            <ProtectedRoute
              isAuthed={isAuthed}
              path='/question/:id'
              component={QuestionPage}
            />
            <ProtectedRoute
              isAuthed={isAuthed}
              path='/add'
              component={NewQuestion}
            />
            <ProtectedRoute
              isAuthed={isAuthed}
              path='/'
              exact
              component={Dashboard}
            />
            <Route path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  isAuthed: authedUser !== null,
});

export default connect(mapStateToProps)(App);
