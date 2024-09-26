import {ISpecificStatModal, SimpleStatModal} from "./SimpleStatModal.tsx";


export const ConstitutionModal = (props: ISpecificStatModal) => {
    return (
        <SimpleStatModal  isOpen={props.isOpen} onClose={props.onClose} statName={"constitution"}/>
    )
}