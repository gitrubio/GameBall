import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { menusSlice } from './menus/menuSlice'
import { statusConectionSlice } from './status-conection/statusConectionSlice';


export const store = configureStore({
    reducer: {
        menu: menusSlice.reducer,
        statusConection: statusConectionSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

