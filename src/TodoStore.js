import React, {Component, useState, useEffect} from 'react'
import './App.css';
import List from './List.jsx';
import useFetch from './useFetch.js';
import Header from './Header.jsx';
import Form from './Form.jsx';

export const TodoContext = React.createContext();

const TodoStore = () => {
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

  const changeTodoStatus = (id) => {
    // debugger; 디버깅을 통해서 id가 문자열로 반환하는 것을 발견 -> 두번째 아랫줄에 숫자로 변경
    const updateTodos = todos.map(todo => {
      if(todo.id === +id) {
        if(todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  useEffect( ()=> {
    console.log("새로운 내용이 렌더링됐네요");
  },[todos]) //렌더링 시점을 명시하기 위한 관찰할 state 지정

  return (
    <TodoContext.Provider value={{todos, addTodo, changeInputData, loading, changeTodoStatus}}>
      <Header />

      <Form />

      <List />
    </TodoContext.Provider>
  )
}

export default TodoStore;