import {create} from "zustand";

interface IPassiveFeelingsStore {
    passiveFeelings: PassiveFeelings,
    setPassiveFeelings: (passiveFeelings: Partial<PassiveFeelings>) => void
}

export const usePassiveFeelingsStore = create<IPassiveFeelingsStore>()((set) => ({
    setPassiveFeelings: (newPassiveFeelings: Partial<PassiveFeelings>) =>{
        set(({passiveFeelings}) => ({
            passiveFeelings: {...passiveFeelings, ...newPassiveFeelings}
        }))
    },
    passiveFeelings:{
        perception: 0,
        insight: 0,
        analysis: 0
    }
}))

export type PassiveFeelings = {
    perception: number,
    insight: number,
    analysis: number
}