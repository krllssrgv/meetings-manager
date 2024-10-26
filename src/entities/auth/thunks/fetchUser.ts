import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@shared";


export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}auth/get_user`, {
                method: 'GET',
                credentials: 'include'
            });
            
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return rejectWithValue('auth');
            }
        } catch {
            return rejectWithValue('network');
        }
    }
)