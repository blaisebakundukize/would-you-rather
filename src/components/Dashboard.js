import React, { Component } from "react";
import { connect } from "react-redux";
import CoolTabs from "react-cool-tabs";

import Question from "./Question";

class Dashboard extends Component {
  render() {
    const activeTabColor = "#3cb371";
    const greyColor = "#f8f8f8";
    const contentStyle = {
      background: "white",
      height: "47.55rem",
      paddingBottom: "1rem",
      boxSizing: "border-box",
      overflow: "auto",
    };
    const tabContainerStyle = {
      width: "55rem",
      height: "52rem",
      margin: "0 auto",
      background: "white",
      border: "2px solid #dad7d7",
      boxSizing: "border-box",
    };

    const activeTabBorderBottomStyle = {
      background: activeTabColor,
      height: 2,
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
        activeTabStyle={{
          background: greyColor,
          color: activeTabColor,
          fontSize: "1.4rem",
        }}
        unActiveTabStyle={{
          background: "white",
          color: "black",
          fontSize: "1.4rem",
        }}
        activeLeftTabBorderBottomStyle={activeTabBorderBottomStyle}
        activeRightTabBorderBottomStyle={activeTabBorderBottomStyle}
        tabsBorderBottomStyle={{ background: "#dad7d7", height: 2 }}
        leftContentStyle={contentStyle}
        rightContentStyle={contentStyle}
        leftTabTitle={"Unanswered Questions"}
        rightTabTitle={"Answered Questions"}
        leftContent={
          <ul>
            {unansweredQuestions.map((id) => (
              <li key={id}>
                <Question id={id} title='' />
              </li>
            ))}
          </ul>
        }
        rightContent={
          <ul>
            {answeredQuestions.map((id) => (
              <li key={id}>
                <Question id={id} title='' />
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
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  answers: users[authedUser].answers,
});

export default connect(mapStateToProps)(Dashboard);
