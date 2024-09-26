import {create} from "zustand";

interface IStatsStore {
    stats: Stats,
    setStats: (stats: Partial<Stats>) => void,
}

export const useStatsStore = create<IStatsStore>()((set) => ({
    setStats: (newStats: Partial<Stats>) => {
        set(({stats}) => ({
            stats: {...stats, ...newStats}
        }))
    },
    stats: {
        charisma: 10,
        constitution: 10,
        dexterity: 10,
        intelligence: 10,
        strength: 10,
        wisdom: 10,
    }
}))

export type Stats = {
    charisma: number,
    constitution: number,
    dexterity: number,
    intelligence: number,
    strength: number,
    wisdom: number
}
