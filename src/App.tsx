import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';


type formElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string
  complete: boolean
}

interface ITodo2 extends ITodo {
  tags: string[]
}


function App(): JSX.Element {
  const [inpValue, setInpValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: formElem): void => {
    e.preventDefault();
    addTodo(inpValue);
    setInpValue('');
  }


  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);

    console.log(todos);
  }

  const completeTodo = (idx: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[idx].complete = !newTodos[idx].complete;

    setTodos(newTodos);
  }

  const removeTodo = (idx: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }


  /*
  const removeTodo = (text: string): void => {
    const todoIndex: number = todos.findIndex((item) => (
      item.text === text
    ))

    const newTodos: ITodo[] = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  */

  /*
  const addTodo = ():void => {
    setTodos((prevState:ITodo[]) => (
      [...prevState, {text: inpValue, complete: false}]
    ));
    console.log(todos);
  }
  */


  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inpValue} onChange={e => setInpValue(e.target.value)} required />
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {todos.map((t, idx): JSX.Element => (
          <React.Fragment key={idx}>
            <div style={{ textDecoration: t.complete ? 'line-through' : '' }}>{t.text}</div>
            <button type='button' onClick={() => { completeTodo(idx) }}>
              {t.complete ? 'Completed!' : 'Incompletee..'}
            </button>
            <button type='button' onClick={() => {removeTodo(idx)}}>X</button>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export default App;
