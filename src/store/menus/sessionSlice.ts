import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ISession } from '../../interfaces/sesions.interface';
import { configApparenceDefault, limitPlayersDefault } from '../../data/session.data';



const initialState: ISession = {
    id: '',
    dateStart: new Date(),
    dateEnd: new Date(),
    limitPlayers: limitPlayersDefault,
    playerAnfitrion: '',
    players: [],
    statusSession: 'pending',
    configApparence: configApparenceDefault
}

export const sessionSlice = createSlice({
    name: 'userSession',
    initialState,
    reducers: {
        startLoading: (state, /* action */) => {
            console.log('algo')
        },
    },

});


export const { startLoading } = sessionSlice.actions;

export const selectedSession = (state: RootState) => state.session
