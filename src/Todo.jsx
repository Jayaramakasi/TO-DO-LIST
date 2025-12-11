import React from "react";

function Todo({ todo,index,deletetodo}) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="action">
       completed<input type="checkbox" />
        &nbsp; &nbsp;<button onClick={()=>deletetodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
