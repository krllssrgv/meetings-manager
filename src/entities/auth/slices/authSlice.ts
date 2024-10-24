import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";


export type AuthState = {
    login: boolean;
    user: {
        name: string;
        lastname: string;
        fathername: string;
        owner: boolean;
    },
};


const initialState: AuthState = {
    login: false,
    user: {
        name: '',
        lastname: '',
        fathername: '',
        owner: false,
    },
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state: AuthState) => {
            state.login = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state: AuthState, action) => {
                state.user.name = action.payload.name;
                state.user.lastname = action.payload.lastname;
                state.user.fathername = action.payload.fathername;
                state.user.owner = action.payload.owner;
            })
            .addCase(fetchUser.rejected, (state: AuthState, action) => {
                if (action.payload === 'auth') {
                    state.login = false;
                }
            })
            .addDefaultCase(() => {});
    }
});


export const { loginUser } = authSlice.actions;
export const authReducer = authSlice.reducer