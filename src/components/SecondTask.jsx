import React, { useState } from "react";

const SecondTask = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div>
      {isTrue ? <p>True</p> : <p>False</p>}

      <button onClick={() => setIsTrue(!isTrue)}>change T/F</button>
    </div>
  );
};

export default SecondTask;
