import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
    state.isLoading = true;
  };
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const isPendingAction = action => {
    return action.type.endsWith('/pending');
  };
  
const isRejectAction = action => {
    return action.type.endsWith('/rejected');
  };

const contactsSlice = createSlice({
    name: 'items',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
      filter: '',
    },

    reducers: {
        changeFilter(state, { payload }) {
          return { ...state, filter: payload };
        },
      },
 
      extraReducers: builder => {
        builder
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
          })
          .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(
              contact => contact.id !== action.payload.id
            );
          })
          .addMatcher(isPendingAction, handlePending)
          .addMatcher(isRejectAction, handleRejected);
      },
});

export const contactsReducer = contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;