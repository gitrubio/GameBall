

export type StatusSession = 'pending' | 'playing' | 'finished'

export interface ISession {
    id: string
    dateStart: Date;
    dateEnd: Date;
    players: IPlayer[]
    statusSession: StatusSession
}

export type StatusPlayed = 'pending' | 'playing' | 'finished'
export interface IPlayer {
    name: string;
    startPlay: Date;
    endPlay: Date;
    status: StatusPlayed
}