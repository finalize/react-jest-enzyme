import React from 'react';

export default (props) => {
  if (props.success) {
    return (
      <div className="component-congrats">
        <span className="congrats-message">
          Congratulations!
        </span>
      </div>
    )
  } else {
    return (
      <div className="component-congrats" />
    )
  }
}