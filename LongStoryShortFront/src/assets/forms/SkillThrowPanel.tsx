import {FC} from "react";
import {Box, Button, Grid, Typography} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {baseTheme} from "../../props/theme.ts";

type checkThrowProps = {
    name: string,
    value: number
}

export const SkillThrowPanel: FC<checkThrowProps> = (props: checkThrowProps) => {
    const checkboxSize = 25
    return (
        <Grid item container width={"100%"} height={"50px"}>
            <Box position={"relative"}>
                <Checkbox
                    icon={
                        <>
                            <Box width={checkboxSize} height={checkboxSize}>
                                <Box width={checkboxSize} component="img"
                                     src={baseTheme.icons.uncheckedAbilityCheckbox}/>
                            </Box>
                        </>
                    } checkedIcon={
                    <>
                        <Box width={checkboxSize} height={checkboxSize}>
                            <Box width={checkboxSize} component="img"
                                 src={baseTheme.icons.checkedAbilityCheckbox}/>
                        </Box>
                    </>
                }
                    sx={{
                        position: "absolute",
                        top: "6px",
                        backgroundColor: "transparent",
                        "&:hover": {backgroundColor: "transparent"}
                    }}/>
            </Box>
            <Box alignSelf={"center"} alignContent={"center"} bgcolor={"primary.main"} width={"87%"} height={"40px"}
                 sx={{
                     borderBottomLeftRadius: "30px",
                     borderTopLeftRadius: "30px"
                 }}>
                <Typography variant="h5" ml={"40px"} color={"text.main"}>
                    {props.name}
                </Typography>
            </Box>
            <Box width={"12%"}>
                <Button disableRipple fullWidth sx={{
                    border: 1,
                    bgcolor: "secondary.main",
                    borderColor: "border.main",
                    borderRadius: "7px",
                    "&:hover": {
                        borderColor: "border.main",
                        bgcolor: "secondary.main",
                    },
                }}>
                    <Typography variant="h4"  color={"text.main"}>
                        {props.value > 0 ? '+' : null}
                        {props.value}
                    </Typography>
                </Button>
            </Box>
        </Grid>
    )
}