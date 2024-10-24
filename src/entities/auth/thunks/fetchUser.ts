import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@shared";


export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}get_user`, {
                method: 'GET',
            });
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                rejectWithValue('auth');
            }
        } catch {
            rejectWithValue('network');
        }
    }
)