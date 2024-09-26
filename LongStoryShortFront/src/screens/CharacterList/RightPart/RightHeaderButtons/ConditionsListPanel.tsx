import {FC, useState} from "react";
import {Grid} from "@mui/material";
import {Conditions, useConditionsStore} from "../../CharacterListData/ConditionsStore.ts";
import {ConditionListPanelStyled} from "../../styles/ConditionListPanelStyled.ts";
import {ConditionsListModal} from "../../../../assets/forms/modals/ConditionsModal/ConditionsListModal.tsx";
import {NoneConditionDivider} from "../../styles/ConditionsListPanel.ts";
import {StyledTextLabel} from "../../styles/IndexStyled.ts";

export const ConditionsListPanel: FC = () => {
    const conditions = useConditionsStore(state => state.conditions);
    const maxTextLength = 90;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const getListToText = () => {
        let result = "";
        let overSized = false;
        const conditionNames = Object.keys(conditions);
        for (let i = 0; i < conditionNames.length && !overSized; i++)
            if (conditions[conditionNames[i] as keyof Conditions]) {
                if (result.length + conditionNames[i].length <= maxTextLength) {
                    if (result.length > 0)
                        result += ", ";
                    result += conditionNames[i];
                } else {
                    overSized = true;
                    result += "...";
                }
            }
        return result
    }

    return (
        <>
            <ConditionListPanelStyled onClick={openModal}>
                <Grid container alignItems={"center"} direction={"column"}  justifyContent={"space-between"}
                      sx={{
                          height: "100%"
                      }}>
                    {(getListToText() != "") ?
                        <StyledTextLabel normal={"true"} variant={"h3"}>
                            {getListToText()}
                        </StyledTextLabel> :
                        <NoneConditionDivider />
                    }
                    <StyledTextLabel normal={"true"} variant={"h4"}>
                        states
                    </StyledTextLabel>
                </Grid>
            </ConditionListPanelStyled>
            <ConditionsListModal isOpen={isModalOpen} setClose={closeModal}/>
        </>
    );
};