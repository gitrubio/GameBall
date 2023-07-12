import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IPlayer } from '../../interfaces/sesions.interface';



const initialState: IPlayer = {
    name: 'User',
    endPlay: new Date(),
    startPlay: new Date(),
    status: 'pending',
}

export const userSessionSlice = createSlice({
    name: 'userSession',
    initialState,
    reducers: {
        startLoading: (state, /* action */) => {
            console.log('algo')
        },
    },

});


export const { startLoading } = userSessionSlice.actions;

export const selectUserSession = (state: RootState) => state.userSession
