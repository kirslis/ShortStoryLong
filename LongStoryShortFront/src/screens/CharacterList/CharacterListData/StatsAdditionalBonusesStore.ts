import {create} from "zustand";

interface IStatsAdditionalBonuses {
    statsAdditionalBonuses: StatsAdditionalBonuses,
    setStatsAdditionalBonuses: (newStatsAdditionalBonuses: Partial<StatsAdditionalBonuses>) => void,
}

export const useStatsAdditionalBonusesStore = create<IStatsAdditionalBonuses>()((set) => ({
    setStatsAdditionalBonuses: (newStatsAdditionalBonuses: Partial<StatsAdditionalBonuses>) => {
        set(({statsAdditionalBonuses}) => ({
            statsAdditionalBonuses: {...statsAdditionalBonuses, ...newStatsAdditionalBonuses},
        }))
    },
    statsAdditionalBonuses:{
        charisma: 0,
        constitution: 0,
        dexterity: 0,
        intelligenceMod: 0,
        strength: 0,
        wisdomMod: 0
    }
}))

export type StatsAdditionalBonuses = {
    charisma: number,
    constitution: number,
    dexterity: number,
    intelligence: number,
    strength: number,
    wisdom: number
}