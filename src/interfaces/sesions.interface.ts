

export type StatusSession = 'pending' | 'playing' | 'finished'

export interface ISession {
    id: string
    dateStart: Date;
    dateEnd: Date;
    players: IPlayer[]
    statusSession: StatusSession
    playerAnfitrion: string
    configApparence: {
        colorBallPlayer: string;
        colorMetaPlayer: string;
        colorObstacle: string;

        sizeBallPlayer: string;
        sizeObstacle: string;
        sizeMetaPlayer: string;

        positionBallPlayer: string;
        positionObstacle: string;
        positionMetaPlayer: string;
    };
    limitPlayers: number;

}

export type StatusPlayed = 'pending' | 'playing' | 'finished'
export interface IPlayer {
    name: string;
    startPlay: Date;
    endPlay: Date;
    status: StatusPlayed
}