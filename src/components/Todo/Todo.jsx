import React, { useEffect, useState } from 'react';
import style from './Todo.module.scss';

const Todo = ({ todo, setTodo }) => {
  const [inp, setInp] = useState(null);
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(todo);
  const removeItem = (id) => {
    const newTodo = todo.filter((elem) => elem.id !== id);
    setTodo(newTodo);
  };

  const changeStatus = (id) => {
    const newTodo = todo.filter((elem) => {
      if (elem.id === id) {
        elem.status = !elem.status;
      }
      return elem;
    });
    setTodo(newTodo);
  };

  const openInp = (id) => {
    setInp(id);
  };

  const saveTitle = (id) => {
    const newTodo = todo.filter((elem) => {
      if (elem.id === id) {
        elem.title = value;
      }
      return elem;
    });
    setTodo(newTodo);
    setValue('');
    setInp(null);
  };

  const todoFilter = (status) => {
    if (status === 'all') {
      setFiltered(todo);
    } else {
      const newTodo = todo.filter((elem) => elem.status === status);
      setFiltered(newTodo);
    }
  };

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);
  return (
    <div>
      <div className={style.filterButtons}>
        <button onClick={() => todoFilter(true)}>Открытые</button>
        <button onClick={() => todoFilter('all')}>Все</button>
        <button onClick={() => todoFilter(false)}>Закрытые</button>
      </div>
      {filtered.map((elem) => {
        return (
          <div key={elem.id}>
            {inp === elem.id ? (
              <div className={style.operators}>
                <div className={style.operatorstext}>
                  <input className={style.text}
                    type="text"
                    placeholder={elem.title}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div className={style.operatorsicons}>
                  <img onClick={() => saveTitle(elem.id)} src="icons/save.png" />
                </div>
              </div>
            ) : (
              <div className={style.operators}>
                <div className={style.operatorstext}>
                  {elem.status ? (
                    <div className={style.text}>{elem.title}</div>
                  ) : (
                    <div className={style.profit}>{elem.title}</div>
                  )}
                </div>
                <div className={style.operatorsicons}>
                  <img onClick={() => removeItem(elem.id)} src="icons/remove.png" />
                  <img onClick={() => openInp(elem.id)} src="icons/change.png" />
                  {elem.status ? (
                    <img onClick={() => changeStatus(elem.id)} src="icons/open.png" />
                  ) : (
                    <img onClick={() => changeStatus(elem.id)} src="icons/close.png" />
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
