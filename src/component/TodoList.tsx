import {Todo} from "../type";
import TodoItem from "./TodoItem";


interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

function TodoList({todos, deleteTodo, toggleTodo}: TodoListProps) {
  return (
    <div>
        <ul>
            {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoItem>
            ))}
        </ul>
    </div>
  )
}

export default TodoList;