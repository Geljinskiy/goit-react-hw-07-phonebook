import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getError,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Box from './Common/Box';
import css from './Common/Common.module.css';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box mt={40} ml={40}>
      <Box mb={32} fontSize={18} width={380}>
        <h1 className={css.heading}>Phonebook</h1>
        <ContactForm />
      </Box>

      <Box fontSize={18} width={360}>
        <h2 className={css.heading}>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Box>
    </Box>
  );
};
