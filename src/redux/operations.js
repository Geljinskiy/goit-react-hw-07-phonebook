import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = 'https://63f073b5ff1b45a1a43b445c.mockapi.io';

export const addContact = createAsyncThunk(
  'action/addContact',
  async ({ name, phone }, thunkAPI) => {
    const id = nanoid();
    try {
      const response = await axios.post('/contacts', {
        name,
        phone,
        id,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'action/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      console.log(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'action/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

