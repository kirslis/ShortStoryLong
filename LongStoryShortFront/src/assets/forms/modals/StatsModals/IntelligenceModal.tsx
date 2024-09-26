import {ISpecificStatModal, SimpleStatModal} from "./SimpleStatModal.tsx";
import {StatModalTextField} from "./StatModalTextField.tsx";
import {usePassiveFeelingsStore} from "../../../../screens/CharacterList/CharacterListData/PassiveFeelingsStore.ts";


export const IntelligenceModal = (props: ISpecificStatModal) => {
    const {passiveAnalysis, setFeeling} = usePassiveFeelingsStore((state) => ({
        passiveAnalysis: state.passiveFeelings.perception,
        setFeeling: state.setPassiveFeelings
    }))

    const analysisChangeHandler = (newPerception: string) => {
        if(!isNaN(+newPerception)){
            setFeeling({["perception"]: +newPerception});
        }
    }

    return (
        <SimpleStatModal  isOpen={props.isOpen} onClose={props.onClose} statName={"intelligence"}>
            <StatModalTextField value={passiveAnalysis}
                                helperText={"passive analysis"}
                                changeHandler={analysisChangeHandler}/>
        </SimpleStatModal>
    )
}