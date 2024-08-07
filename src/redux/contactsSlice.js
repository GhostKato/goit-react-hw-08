import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './contactsOps.js';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;






