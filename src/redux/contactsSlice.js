import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const { contacts } = state;
        console.log('Slice contacts :', contacts[0]);
        contacts.push(action.payload);
        console.log('Slice contacts :', contacts);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const { contacts } = state;
        const updatedContacts = contacts.filter(cont => {
          return cont.id !== action.payload;
        });
        state.contacts = updatedContacts;
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
