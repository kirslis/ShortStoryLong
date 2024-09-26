import {ISpecificStatModal, SimpleStatModal} from "./SimpleStatModal.tsx";


export const CharismaModal = (props: ISpecificStatModal) => {
    return (
        <SimpleStatModal  isOpen={props.isOpen} onClose={props.onClose} statName={"charisma"}/>
    )
}