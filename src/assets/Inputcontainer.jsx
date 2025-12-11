import React from "react";

function Inputcontainer({ inputVal,writetodo,addtodos }) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writetodo} placeholder="Enter-todo" />
     
      <button onClick={addtodos}><b>Add</b></button>
    </div>
  );
}

export default Inputcontainer;
