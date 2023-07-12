import { useEffect, useState } from 'react'
import { sessionService } from '../services/session.service';
import { setSession } from '../store/menus/sessionSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { ISession } from '../interfaces/sesions.interface';


const useListeningSession = () => {
    const { id } = useAppSelector(state => state.session)
    const dispatch = useAppDispatch()
    const [sessionListening, setSessionListening] = useState<ISession>();
    const [loading, setLoading] = useState(true);

    const onSet = (session: ISession) => {
        setSessionListening(session)
        dispatch(setSession(session))
        setLoading(false)
    }
    useEffect(() => {
        const unsubscribe = sessionService.listeningSession(id, onSet)
        return () => {
            unsubscribe()
        }
    }, [])

    return {
        loading,
        sessionListening
    }
}

export default useListeningSession