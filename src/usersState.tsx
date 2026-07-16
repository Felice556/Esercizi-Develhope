import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number;
  name: string;
  login: string;
};

type UsersState = {
  list: User[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (username: string): Promise<User> => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`Utente "${username}" non trovato`);
    }
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      login: data.login,
    };
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.list.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Errore sconosciuto';
      });
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;