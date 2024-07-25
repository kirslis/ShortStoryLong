import {FC} from "react";
import {ThrowPanel} from "./ThrowPanel.tsx";
import {Box, checkboxClasses, Grid} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

type checkThrowProps = {
    value: number
}

export const SaveThrowPanel: FC<checkThrowProps> = (props: checkThrowProps) => {
    const checkboxSize = 25
    return (
        <Grid container alignContent={"center"} width={"100%"}>
            <Box flex={1} position={"relative"}>
                <Checkbox
                    icon={<RadioButtonUncheckedIcon sx={{
                        width: checkboxSize,
                        height: checkboxSize,
                        backgroundColor: "background.paper",
                    }}/>}
                    checkedIcon={<RadioButtonCheckedIcon sx={{
                        width: checkboxSize,
                        height: checkboxSize,
                        backgroundColor: "background.paper",
                    }}/>}
                    sx={{
                        position: "absolute",
                        top: "6px",
                        left: "-20px",
                        zIndex: "2",
                        [`&, &.${checkboxClasses.checked}`]: {
                            color: "border.main",
                        },
                        "&:hover": {backgroundColor: "transparent"}
                    }}
                />
                <ThrowPanel value={props.value} name={"Save throw"}/>
            </Box>
        </Grid>
    )
}