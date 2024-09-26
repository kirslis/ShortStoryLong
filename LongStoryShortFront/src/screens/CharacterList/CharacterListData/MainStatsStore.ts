import {create} from "zustand";

interface IMainStatsStore {
    mainStats: mainStats,
    setMainStats: (mainStats: Partial<mainStats>) => void,
}

export const useMainStatsStore = create<IMainStatsStore>()((set) => ({
    setMainStats: (newMainStats: Partial<mainStats>) => {
        set(({mainStats}) => ({
            mainStats: {...mainStats, ...newMainStats},
        }))
    },

    mainStats: {
        ac: 10,
        currentHP: 10,
        currentXp: 0,
        lvl: 1,
        maxHP: 100,
        name: "bob",
        race: "human",
        characterClass: "cleric",
        subRace: 0,
        id: -1,
        speed: 30,
        inspiration: false
    }
}))

export type mainStats = {
    ac: number,
    currentHP: number,
    currentXp: number,
    id: number,
    lvl: number,
    maxHP: number,
    name: string,
    race: string,
    characterClass: string,
    speed: number,
    initiative?: number,
    inspiration: boolean
}
