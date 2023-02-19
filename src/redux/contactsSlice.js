import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer({ items }, action) {
        items.push(action.payload);
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
        const updatedContacts = state.items.filter(cont => {
          return cont.id !== action.payload;
        });
        state.items = updatedContacts;
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
