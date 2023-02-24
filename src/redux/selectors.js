import { createSelector } from '@reduxjs/toolkit';

// atomic selectors
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

// composite selectors
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log('calcuating');

    const regNormolize = sentence => {
      return sentence.toLowerCase().trim();
    };

    return contacts.filter(contact => {
      return (
        regNormolize(contact.name).includes(regNormolize(filter)) ||
        regNormolize(contact.phone).includes(regNormolize(filter))
      );
    });
  }
);
