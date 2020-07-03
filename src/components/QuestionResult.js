import React from "react";

import Badge from "./Badge";

const QuestionResult = ({ options, answer }) => {
  const optionKeys = Object.keys(options);
  let totalVotes = 0;
  optionKeys.forEach((key) => {
    totalVotes += options[key].votes.length;
  });
  return (
    <>
      <h3>Results:</h3>
      {optionKeys.map((key) => (
        <Badge key={key} badgeContent={answer === key ? "your vote" : null}>
          <div
            className={`question-option ${
              answer === key ? "option-voted" : ""
            }`}
          >
            <p>Would you rather {options[key].text}</p>
            <p className='option-result center'>
              <span>
                {parseFloat(
                  ((options[key].votes.length * 100) / totalVotes).toFixed(1)
                ).toString()}
                <span className='option-result-percent'>%</span>
              </span>
              <span className='text-small default-color'>{`${options[key].votes.length} out of ${totalVotes}`}</span>
            </p>
          </div>
        </Badge>
      ))}
    </>
  );
};

export default QuestionResult;
