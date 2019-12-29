import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const { show, hide } = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = event => {
    event.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim());
      show('Заметка была создана', 'success');
      setValue('');
    } else {
      show('Введите название заметки');
    }

    setTimeout(hide, 2e3);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Введите название заметки'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
