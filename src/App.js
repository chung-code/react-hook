import React, {Component, useState, useEffect} from 'react'
import './App.css';
import List from './List.jsx';
import useFetch from './useFetch.js'


const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, 'http://localhost:8080/todo'); //분리된 customhook 사용

  const changeInputData = (e) =>{
    setNewTodo(e.target.value); //setNewTodo: 입력된 새로운 값(변수 or 함수로 정의 가능)을 newTodo에 넣어준다
  }

  const addTodo = (e) => {
    e.preventDefault(); //form 안에 submit 역할을 하는 button을 눌러도 창 전체가 동기화 되지 않도록
    setTodos([...todos, {'title': newTodo, 'id': todos.length, 'status': 'todo'}]); //setTodos: 원래의 todos 배열에 새롭게 갱신된 newTodo 정보를 추가하여 todos에 넣어준다
  }

  useEffect( ()=> {
    console.log("새로운 내용이 렌더링됐네요");
  },[todos]) //렌더링 시점을 명시하기 위한 관찰할 state 지정

  return (
    <>
    <h1>todo 애플리케이션</h1>

    <form action="">
      <input type="text" name="" onChange={changeInputData}/>
      <button onClick={addTodo}>할일추가</button>
    </form>

    <List todos={todos} loading={loading}/>
    </>
  )
}

export default App;
