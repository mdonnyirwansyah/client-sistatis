import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import sistatisApi, {
    removeAuthentication,
    storeAuthentication,
    storeUser,
} from '../api';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        const response = await sistatisApi.post('auth/login', {
            email: user.email,
            password: user.password,
        });
        const data = response.data.data;
        storeAuthentication(data.access_token);
        return data;
    } catch (error) {
        if (!error.response) {
            throw thunkApi.rejectWithValue(error.message);
        }
        return thunkApi.rejectWithValue(error.response.data);
    }
});

export const getMe = createAsyncThunk('auth/getMe', async (_, thunkApi) => {
    try {
        const response = await sistatisApi.post('auth/me');
        const data = response.data.data;
        storeUser(data);
        return data;
    } catch (error) {
        var user = JSON.parse(localStorage.getItem('user'));
        if (error.message === 'Network Error' && user) {
            return user;
        }
        if (!error.response) {
            throw thunkApi.rejectWithValue(error.message);
        }
        return thunkApi.rejectWithValue(error.response.data);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await sistatisApi.post('auth/logout');
    removeAuthentication();
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
