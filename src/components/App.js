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
import ProtectedRoute from "./ProtectedRoute";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { isAuthed } = this.props;
    return (
      <>
        {/* {this.props.isAuthenticated === true ? null : ( */}
        <Layout>
          <Switch>
            <>
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
            </>
          </Switch>
        </Layout>
        {/* )} */}
      </>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  isAuthed: authedUser !== null,
});

export default connect(mapStateToProps)(App);
