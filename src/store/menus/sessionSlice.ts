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
        startLoading: ( /* action */) => {
            console.log('algo')
        },
        setSession: (state, { payload }: { payload: ISession }) => {
            state.id = payload.id
            state.configApparence = payload.configApparence
            state.dateEnd = payload.dateEnd
            state.dateStart = payload.dateStart
            state.limitPlayers = payload.limitPlayers
            state.players = payload.players
            state.statusSession = payload.statusSession
        }
    },

});


export const { startLoading, setSession } = sessionSlice.actions;

export const selectedSession = (state: RootState) => state.session
