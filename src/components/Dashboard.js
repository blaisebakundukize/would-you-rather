import React, { Component } from "react";
import { connect } from "react-redux";
import CoolTabs from "react-cool-tabs";

class Dashboard extends Component {
  render() {
    const activeTabColor = "#46e056";
    const greyColor = "#f8f8f8";
    return (
      <div>
        <CoolTabs
          tabKey={"1"}
          style={{ width: 550, height: 500, background: "white" }}
          activeTabStyle={{ background: greyColor, color: activeTabColor }}
          unActiveTabStyle={{ background: "white", color: "black" }}
          activeLeftTabBorderBottomStyle={{
            background: activeTabColor,
            height: 2,
          }}
          activeRightTabBorderBottomStyle={{
            background: activeTabColor,
            height: 2,
          }}
          tabsBorderBottomStyle={{ background: "white", height: 2 }}
          leftContentStyle={{ background: "white" }}
          rightContentStyle={{ background: "white" }}
          leftTabTitle={"Unanswered Questions"}
          rightTabTitle={"Answered Questions"}
          leftContent='Content for unanswered Questions'
          rightContent='Content for answered Questions'
          contentTransitionStyle={"transform 0.6s ease-in"}
          borderTransitionStyle={"all 0.6s ease-in"}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[a].timestamp - questions[b].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
