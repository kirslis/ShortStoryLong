import {Box} from "@mui/material";
import {ClosableLabel} from "../ClosableLabel.tsx";
import {FC} from "react";

export const EquipmentPanel:FC = () => {
    return (
        <Box>
            <ClosableLabel name={"equipment"} value={""}/>
            <ClosableLabel name={"treasures"} value={""}/>
        </Box>
    )
}