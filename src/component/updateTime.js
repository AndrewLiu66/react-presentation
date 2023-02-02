import React, { useState } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', id: 1 },
    { text: 'Build a to-do list app', id: 2 },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: Date.now() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
    </div>
  );
};

export default ToDoList;
