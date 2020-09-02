import { GameMode } from './enums/enums';

export interface GosuResponse {
    menu: IMenu;
    gameplay: IGameplay;
}

export interface IMenu {
    state: number; //TODO: Enum
    skinFolder: string;
    gameMode: GameMode;
    isChatEnabled: number;
    bm: IBm;
    mods: IMods;
    pp: IMenuPP;    
}

export interface IBm {
    time: ITime;
    id: number;
    set: number;
    md5: string;
    rankedStatus: number; //TODO: Enum
    metadata: IMetadata;
    stats: IStats;
    path: IPath;
}

export interface ITime {
    firstObj: number;
    current: number;
    full: number;
    mp3: number;
}

export interface IMetadata {
    artist: string;
    title: string;
    mapper: string;
    difficulty: string;
}

export interface IStats {
    CS: number;
    OD: number;
    HP: number;
    AR: number;
    SR: number,
    BPM: IBPM;
    fullSR: number;
    memoryAR: number;
    memoryCS: number;
    memoryOD: number;
    memoryHP: number;
}

export interface IBPM {
    min: number;
    max: number;
}

export interface IPath {
    full: string;
    folder: string;
    file: string;
    bg: string;
    audio: string;
}

export interface IMods {
    num: number;
    str: string;
}

export interface IMenuPP {
    "95": number;
    "96": number;
    "97": number;
    "98": number;
    "99": number;
    "100": number;
    strains: number[];
}

export interface IGameplay {
    gameMode: GameMode;
    name: string;
    score: number;
    accuracy: number;
    combo: ICombo;
    hp: IHP;
    hits: IHits;
    pp: IGameplayPP;
    leaderboard: ILeaderboard;
}

export interface ICombo {
    current: number;
    max: number;
}

export interface IHP {
    normal: number;
    smooth: number;
}

export interface IHits {
    "0": number;
    "50": number;
    "100": number;
    "200": number;
    "300": number;
    "geki": number;
    "katu": number;
    "sliderBreaks": number;
    "unstableRate": number;
    "hitErrorArray": null | number[];
}

export interface IGameplayPP {
    current: number;
    fc: number;
}

export interface ILeaderboard {
    hasLeaderboard: boolean;
    ourplayer: ILeaderboardPlayer;
    slots: null | ILeaderboardPlayer[];
}

export interface ILeaderboardPlayer {
    name: string;
    score: number;
    combo: number;
    maxCombo: number;
    mods: string;
    h300: number;
    h100: number;
    h50: number;
    h0: number;
    team: number;
    position: number;
    isPassings: number;
}