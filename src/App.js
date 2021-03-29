import React, {Componen, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import List from './List.jsx'

const App = () => {
  const [todos, setTodos] = useState(['js공부']);
  return (
    <>
    <h1>todo 애플리케이션</h1>
    <form action="">
      <input type="text" name="" />
      <button>할일추가</button>
    </form>

    <List todos={todos}/>
    </>
  )
}

export default App;
