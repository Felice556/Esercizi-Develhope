import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number;
  name: string;
  login: string;
};

type UsersState = User[];

const initialState: UsersState = [];

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      return [...state, action.payload];
    },
    removeUser: (state, action: PayloadAction<number>) => {
      return state.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;