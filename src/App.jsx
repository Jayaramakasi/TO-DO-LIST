import {useState} from 'react'
import "./App.css";
import Inputcontainer from './assets/Inputcontainer';
import Todocontainer from './todocontainer';

function App() {
  const[inputVal,setInputval]=useState('')
  const[todos , setTodos]=useState([])
  function writetodo(e){
      setInputval(e.target.value)
    }
    function addtodos(){
        if(inputVal!=''){
          setTodos((prevTodos)=>[...prevTodos,inputVal])
          setInputval('')
        }
    }
    function deletetodo(todoIndex){
      setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>
      {return prevTodosIndex !=todoIndex
    }))

    }
    console.log(todos)
  return (
    
    
   <main>
    <h1>TO DO LIST</h1>
    <Inputcontainer inputVal={inputVal} writetodo={writetodo} addtodos={addtodos}/>
    <Todocontainer todos={todos} deletetodo={deletetodo}/>
   

      

   </main>
  )
}

export default App
