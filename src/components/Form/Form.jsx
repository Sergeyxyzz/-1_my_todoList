import React from 'react';
import style from './Form.module.scss';
import { v1 as uuidv1 } from 'uuid';
import { useState } from 'react';

const Form = ({ todo, setTodo }) => {
  const [value, setValue] = useState('');
  const addTitle = () => {
    if (value) {
      const newTodo = [
        ...todo,
        {
          id: uuidv1(),
          title: value,
          status: true,
        },
      ];
      setTodo(newTodo);
      setValue('');
    }
  };

  return (
    <>
      <h1 className={style.header}>Todo List</h1>
      <div className={style.wrapper}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <img onClick={() => addTitle()} src="icons/add.png" />
      </div>
    </>
  );
};

export default Form;
