import {create} from "zustand";

interface IConditionsStore {
    conditions: Conditions;
    descriptions: Descriptions;
    setConditions: (newConditions: Partial<Conditions>) => void
}

export const useConditionsStore = create<IConditionsStore>()((set) =>({
    setConditions: (newConditions: Partial<Conditions>) => set(({conditions}) => ({
        conditions: {...conditions, ...newConditions},
    })),

    conditions: {
        blinded: true,
        charmed: true,
        deafened: true,
        frightened: true,
        grappled: true,
        incapacitated: true,
        invisible: true,
        paralyzed: true,
        petrified: true,
        poisoned: true,
        prone: true,
        restrained: true,
        stunned: true,
        unconscious: true,
    },

    descriptions: {
        blinded: "A blinded creature can’t see and automatically fails any ability check that requires sight.\nAttack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.",
        charmed: "A charmed creature can’t attack the charmer or target the charmer with harmful abilities or magical effects.\nThe charmer has advantage on any ability check to interact socially with the creature.",
        deafened: "A deafened creature can’t hear and automatically fails any ability check that requires hearing.",
        frightened: "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.\nThe creature can’t willingly move closer to the source of its fear.",
        grappled: "A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.\nThe condition ends if the grappler is incapacitated (see the condition).\nThe condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.",
        incapacitated: "An incapacitated creature can’t take actions or reactions.",
        invisible: "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves.\nAttack rolls against the creature have disadvantage, and the creature’s attack rolls have advantage.",
        paralyzed: "A paralyzed creature is incapacitated (see the condition) and can’t move or speak.\nThe creature automatically fails Strength and Dexterity saving throws.\nAttack rolls against the creature have advantage.\nAny attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
        petrified: "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.\nThe creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.\nAttack rolls against the creature have advantage.\nThe creature automatically fails Strength and Dexterity saving throws.\nThe creature has resistance to all damage.\nThe creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.",
        poisoned: "A poisoned creature has disadvantage on attack rolls and ability checks.",
        prone: "A prone creature’s only movement option is to crawl, unless it stands up and thereby ends the condition.\nThe creature has disadvantage on attack rolls.\nAn attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.",
        restrained: "A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.\nAttack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.\nThe creature has disadvantage on Dexterity saving throws.",
        stunned: "A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.\nThe creature automatically fails Strength and Dexterity saving throws.\nAttack rolls against the creature have advantage.",
        unconscious: "An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings\nThe creature drops whatever it’s holding and falls prone.\nThe creature automatically fails Strength and Dexterity saving throws.\nAttack rolls against the creature have advantage.\nAny attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
    }
}))

export type Conditions = {
    blinded: boolean,
    charmed: boolean,
    deafened: boolean,
    frightened: boolean,
    grappled: boolean,
    incapacitated: boolean,
    invisible: boolean,
    paralyzed: boolean,
    petrified: boolean,
    poisoned: boolean,
    prone: boolean,
    restrained: boolean,
    stunned: boolean,
    unconscious: boolean,
}

export type Descriptions = {
    blinded: string,
    charmed: string,
    deafened: string,
    frightened: string,
    grappled: string,
    incapacitated: string,
    invisible: string,
    paralyzed: string,
    petrified: string,
    poisoned: string,
    prone: string,
    restrained: string,
    stunned: string,
    unconscious: string,
}