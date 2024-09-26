import {ISpecificStatModal, SimpleStatModal} from "./SimpleStatModal.tsx";


export const DexterityModal = (props: ISpecificStatModal) => {
    return (
        <SimpleStatModal  isOpen={props.isOpen} onClose={props.onClose} statName={"dexterity"}/>
    )
}