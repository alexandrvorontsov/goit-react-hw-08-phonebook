import { createSelector } from '@reduxjs/toolkit';
import { rootReducer } from './store';

// const selectPhonebookSelector = createSelector(
//   rootReducer,
//   state => state.contactReducer
// );

export const selectItems = state => state.contacts.items;
export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectNameData = state => state.nameData;
export const selectNumberData = state => state.numberData;
