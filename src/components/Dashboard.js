import React, { Component } from "react";
import { connect } from "react-redux";
import CoolTabs from "react-cool-tabs";

import Question from "./Question";

class Dashboard extends Component {
  render() {
    const activeTabColor = "#46e056";
    const greyColor = "#f8f8f8";
    const contentStyle = {
      background: "white",
      height: "auto",
      maxHeight: "54rem",
      overflow: "auto",
    };
    const tabContainerStyle = {
      width: "55rem",
      height: "58rem",
      margin: "0 auto",
      background: "white",
      border: "1px solid #dad7d7",
    };
    const { questionIds, answers } = this.props;

    let answeredQuestions = [];
    let unansweredQuestions = [];

    if (questionIds) {
      questionIds.forEach((id) => {
        if (answers[id]) {
          answeredQuestions.push(id);
        } else {
          unansweredQuestions.push(id);
        }
      });
    }
    return (
      <CoolTabs
        tabKey={"1"}
        style={tabContainerStyle}
        activeTabStyle={{ background: greyColor, color: activeTabColor }}
        unActiveTabStyle={{ background: "white", color: "black" }}
        // activeLeftTabBorderBottomStyle={{
        //   background: "#dad7d7",
        //   height: 1,
        // }}
        // activeRightTabBorderBottomStyle={{
        //   background: "#dad7d7",
        //   height: 1,
        // }}
        tabsBorderBottomStyle={{ background: "#dad7d7", height: 1 }}
        leftContentStyle={contentStyle}
        rightContentStyle={contentStyle}
        leftTabTitle={"Unanswered Questions"}
        rightTabTitle={"Answered Questions"}
        leftContent={
          <ul>
            {unansweredQuestions.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        }
        rightContent={
          <ul>
            {answeredQuestions.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        }
        contentTransitionStyle={"transform 0.6s ease-in"}
        borderTransitionStyle={"all 0.6s ease-in"}
      />
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[a].timestamp - questions[b].timestamp
  ),
  answers: users[authedUser].answers,
});

export default connect(mapStateToProps)(Dashboard);
