import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://656e44eebcc5618d3c24bc02.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
      try {
        const response = axios.delete(`/contacts/${id}`);
        return (await response).data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );