import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    const trimmed = newTodo.trim();
    if (trimmed === "") return;
    if (todos.some(todo => todo.text === trimmed)) {
      alert("Todo already exists!");
      return;
    }

    const newTask: Todo = {
      id: Date.now(),
      text: trimmed,
      completed: false
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Taskify v2</h1>
      <input value={newTodo} onChange={handleInput} type="text" />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>completed</button>
            <button onClick={() => removeTodo(todo.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
