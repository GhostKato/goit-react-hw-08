import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b30e9e7fba54a5b7eb3b97.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('contacts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContacts = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`contacts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContacts = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
  try {
    const { data } = await axios.post('contacts', body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});