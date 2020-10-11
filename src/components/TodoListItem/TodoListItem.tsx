import React from 'react'

export interface TodoListItemProps {
  todo: Todo,
  toggleTodo: ToggleTodo
}
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  const styles = {
    textDecoration: todo?.complete ? 'line-through' : 'none',
    cursor: 'pointer'
  };
  return (
    <div>
      <li>
        <label style={styles}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          {todo?.text}
        </label>
      </li>
    </div >
  )
}
