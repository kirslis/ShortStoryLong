import {ISpecificStatModal, SimpleStatModal} from "./SimpleStatModal.tsx";


export const StrengthModal = (props: ISpecificStatModal) => {
    return (
        <SimpleStatModal  isOpen={props.isOpen} onClose={props.onClose} statName={"strength"}/>
    )
}