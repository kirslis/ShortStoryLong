import {create} from "zustand";

interface IStatsProficiencyStore {
    statsProficiency: StatsProficiency,
    setStatsProficiency: (stats: Partial<StatsProficiency>) => void
}

export const useStatsProficiencyStore = create<IStatsProficiencyStore>()((set) => ({
    setStatsProficiency:(newStatsProficiency: Partial<StatsProficiency>) => {
        set(({statsProficiency}) => ({
            statsProficiency: {...statsProficiency, ...newStatsProficiency}
        }))
    },
    statsProficiency: {
        charisma: false,
        constitution: false,
        dexterity: false,
        intelligence: false,
        strength: false,
        wisdom: false
    }
}))

export type StatsProficiency = {
    charisma: boolean,
    constitution: boolean,
    dexterity: boolean,
    intelligence: boolean,
    strength: boolean,
    wisdom: boolean
}