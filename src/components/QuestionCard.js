import React from "react";

const QuestionCard = (props) => {
  const { name, avatarURL, children } = props;
  return (
    <div className='question'>
      <div className='question-header'>
        <h3 className='question-title'>{`${name} asked:`}</h3>
      </div>
      <div className='question-content'>
        <div className='question-author'>
          <div className='avatar'>{avatarURL}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default QuestionCard;
