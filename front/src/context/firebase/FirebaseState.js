import React, { useReducer } from 'react';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { SHOW_LOADER, FETCH_NOTES, ADD_NOTE, REMOVE_NOTE } from '../types';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/todo`);

    dispatch({ type: FETCH_NOTES, payload: res.data });
  };

  const addNote = async title => {
    const note = {
      title
    };

    try {
      const res = await axios.post(`${url}/todo`, note);

      dispatch({
        type: ADD_NOTE,
        payload: res.data
      });
    } catch (e) {
      console.log('addNote', 'error');

      throw new Error(e.message);
    }
  };

  const removeNote = async id => {
    await axios.delete(`${url}/todo/${id}`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id
    });
  };

  const value = {
    showLoader,
    addNote,
    removeNote,
    fetchNotes,
    loading: state.loading,
    notes: state.notes
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
