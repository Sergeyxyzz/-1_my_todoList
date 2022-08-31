import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <Form todo={todo} setTodo={setTodo} />
      <Todo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
