import React from "react";

const Badge = ({ children, badgeContent }) => {
  return (
    <div className='badge'>
      {children}
      {badgeContent && <span className='badge-text'>{badgeContent}</span>}
    </div>
  );
};

export default Badge;
