import {Grid} from "@mui/material";
import {
    ConditionDot,
    ConditionTextLabel
} from "../../../../screens/CharacterList/styles/ConditionDescriptionPartStyled.ts";

interface IConditionDescriptionPart {
    descriptionLine: string
}

export const ConditionDescriptionPart = (props: IConditionDescriptionPart) => {
    return (
        <Grid container paddingLeft={"10px"} gap={"5px"} paddingBottom={"5px"}>
            <ConditionDot/>
            <ConditionTextLabel variant={"h3"} align={"justify"}>
                {props.descriptionLine}
            </ConditionTextLabel>
        </Grid>
    )
}