import {create} from "zustand";

interface ISkillsProficiencyStore {
    skillsProficiency: SkillsProficiency,
    setSkillsProficiency: (skills: Partial<SkillsProficiency>) => void
}

export const useSkillsProficiencyStore = create<ISkillsProficiencyStore>()((set) => ({
    setSkillsProficiency: (newSkills: Partial<SkillsProficiency>) => set(({skillsProficiency}) => ({
        skillsProficiency: {...skillsProficiency, ...newSkills},
    })),

    skillsProficiency: {
        acrobatics: false,
        animalHandling: false,
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        sleightOfHand: false,
        stealth: false,
        survival: false,
    },
}))

export type SkillsProficiency = {
    acrobatics: boolean,
    animalHandling: boolean,
    arcana: boolean,
    athletics: boolean,
    deception: boolean,
    history: boolean,
    insight: boolean,
    intimidation: boolean,
    investigation: boolean,
    medicine: boolean,
    nature: boolean,
    perception: boolean,
    performance: boolean,
    persuasion: boolean,
    religion: boolean,
    sleightOfHand: boolean,
    stealth: boolean,
    survival: boolean
}