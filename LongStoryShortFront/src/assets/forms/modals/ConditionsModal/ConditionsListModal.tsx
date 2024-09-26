import {Box, Grid,  Modal} from "@mui/material";
import {LeftModalBoxStyled} from "../../../../screens/CharacterList/styles/ModalsStyled.ts";
import {ConditionCard} from "./ConditionCard.tsx";
import {useConditionsStore} from "../../../../screens/CharacterList/CharacterListData/ConditionsStore.ts";
import {LeftModalHeader} from "../LeftModalHeader.tsx";

interface IConditionsListModal {
    isOpen: boolean;
    setClose: () => void;
}

export const ConditionsListModal = (props: IConditionsListModal) => {
    const conditions = useConditionsStore(state => state.conditions);
    const getConditionElements = () => {
        const names = Object.keys(conditions)
        const conditionElements: Array<JSX.Element> = [];
        names.forEach(name => {
            conditionElements.push(<ConditionCard key={name+"ConditionCard"} conditionName={name}/>);
        })

        return conditionElements;
    }

    return (
        <Modal open={props.isOpen} onClose={props.setClose}>
            <LeftModalBoxStyled>
                <Box height={"100%"} sx={{
                    overflowY: "scroll"
                }}>
                <Grid container width={"100%"} padding={2} direction={"column"} gap={"3px"}>
                   <LeftModalHeader onClose={props.setClose} name={"conditions"}/>
                    {getConditionElements()}
                </Grid>
                </Box>
            </LeftModalBoxStyled>
        </Modal>
    )
}