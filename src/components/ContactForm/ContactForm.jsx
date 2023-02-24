import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { addContact } from 'redux/contactsSlice';
import { addContact } from 'redux/operations.js';
import { selectContacts } from 'redux/selectors';

import MainButtonStyle from 'components/Common/styled-components/MainButton';
import Label from 'components/Common/styled-components/Label';
import Form from 'components/Common/styled-components/Form';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onInput = ev => {
    const input = ev.currentTarget;
    if (input.name === 'name') {
      setName(input.value);
    } else if (input.name === 'phone') {
      setPhone(input.value);
    }
  };

  const onAddingContact = ({ name, phone }) => {
    const isExist = contacts.filter(contact => contact.name === name).length;

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));
  };

  const onFormSubmit = ev => {
    ev.preventDefault();

    onAddingContact({ name, phone });
    ev.currentTarget.reset();
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Label>
        <p>Name</p>
        <input
          onChange={onInput}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <p>Number</p>
        <input
          onChange={onInput}
          value={phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <MainButtonStyle type="submit">Add to contact</MainButtonStyle>
    </Form>
  );
};

export default ContactForm;
