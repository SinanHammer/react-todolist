import logo from './logo.svg';
import './App.css';
import TodoList from "./component/TodoList";
import TodoFilter from "./component/TodoFilter";
import AddTodo from "./component/AddTodo";
import {useState} from "react";
import {Todo} from "./type";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] =useState('all')
  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };


  return (
      <div>
        <h1>MyTodoList</h1>
        <AddTodo addTodo={addTodo}></AddTodo>
        <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={getFilteredTodos()}></TodoList>
        <TodoFilter setFilter={setFilter}></TodoFilter>
      </div>
  );
}

