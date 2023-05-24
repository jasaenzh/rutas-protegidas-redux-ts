/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models';
import { clearLocalStorage, persistLocalStorage } from '../../utilities';

export const EmptyUserState: UserInfo = {
    id: 0,
    name: '',
    email: '',
}

export const UserKey = 'user';

//Creando el estado inicial de la app
export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        createUser: (_state, action) => {
            persistLocalStorage<UserInfo>(UserKey, action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            persistLocalStorage<UserInfo>(UserKey, action.payload);
            return {
                ...state,
                ...action.payload,
            }
        },
        resetUser: () => {
            clearLocalStorage(UserKey);
            return EmptyUserState;
        }
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;