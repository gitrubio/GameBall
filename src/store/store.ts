import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userSessionSlice } from './menus/userSessionSlice'
import { statusConectionSlice } from './status-conection/statusConectionSlice';
import { sessionSlice } from './menus/sessionSlice';


export const store = configureStore({
    reducer: {
        userSession: userSessionSlice.reducer,
        statusConection: statusConectionSlice.reducer,
        session: sessionSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

