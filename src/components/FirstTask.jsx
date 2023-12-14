import React, { useState } from "react";

const FirstTask = () => {
  const [state, setState] = useState(0);
  const handleInputChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div>
      <p>{state}</p>
      <input type="text" value={state} onChange={handleInputChange} />
    </div>
  );
};

export default FirstTask;
