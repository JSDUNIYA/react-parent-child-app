import React from "react";

const Child = (props) => {
  return (
    <div className="child">
      <h2>Child</h2>
      <button onClick={() => props.changeTitle('Siddesh')}> Child to change Parent vlue</button>
    </div>
  );
};

export default Child;
