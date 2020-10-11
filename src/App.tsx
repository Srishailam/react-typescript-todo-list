import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { TodoList } from './components/TodoList/TodoList';

const initialTodos: Array<Todo> = [{
  text: "Walk the dog", complete: true
},
{
  text: "Write app", complete: false
}];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, complete: false }])
  }
  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
