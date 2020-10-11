import React from 'react'
import { TodoListItem } from '../TodoListItem/TodoListItem'

export interface TodoListProps {
  todos: Array<Todo>,
  toggleTodo: ToggleTodo
}
export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div className="TodoList">
      {
        todos.map(todo => {
          return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        })
      }
    </div>
  )
};
