import {SimpleStatModal, ISpecificStatModal} from "./SimpleStatModal.tsx";
import {Grid} from "@mui/material";
import {StatModalTextField} from "./StatModalTextField.tsx";
import {usePassiveFeelingsStore} from "../../../../screens/CharacterList/CharacterListData/PassiveFeelingsStore.ts";

export const WisdomModal = (props: ISpecificStatModal) => {
    const {passivePerception, passiveInsight, setFeeling} = usePassiveFeelingsStore((state) => ({
        passivePerception: state.passiveFeelings.perception,
        passiveInsight: state.passiveFeelings.insight,
        setFeeling: state.setPassiveFeelings
    }))

    const perceptionChangeHandler = (newPerception: string) => {
        if(!isNaN(+newPerception)){
            setFeeling({["perception"]: +newPerception});
        }
    }

    const insightChangeHandler = (newInsight: string) => {
        if(!isNaN(+newInsight)){
            setFeeling({["insight"]: +newInsight});
        }
    }

    return (
        <SimpleStatModal isOpen={props.isOpen} onClose={props.onClose} statName={"wisdom"}>
            <Grid item container spacing={5} >
                <StatModalTextField value={passivePerception}
                                    helperText={"passive perception"}
                                    changeHandler={perceptionChangeHandler}/>
                <StatModalTextField value={passiveInsight}
                                    helperText={"passive insight"}
                                    changeHandler={insightChangeHandler}/>
            </Grid>
        </SimpleStatModal>
    )
}