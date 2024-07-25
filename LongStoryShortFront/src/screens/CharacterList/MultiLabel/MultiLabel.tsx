import {Box, Button, Grid, Typography} from "@mui/material";
import {FC} from "react";

type SwitchButtonProps = {
    name: string,
}

const SwitchButton: FC<SwitchButtonProps> = ({name}: SwitchButtonProps) => {
    return (
        <Button sx={{
            borderBottom: 5,
            borderColor: "primary.main",
            "&:hover": {
                borderColor: "primary.main",
            },
            selected: {
                outline: 'none',
            }
        }}>
            <Typography sx={{
                color: "text.main"
            }}>
                {name}
            </Typography>
        </Button>
    )
}

const SwitchButtonRow: FC = () => {
    return (
        <>
            <SwitchButton name={"attacks"}/>
            <SwitchButton name={"abilities"}/>
            <SwitchButton name={"equipment"}/>
            <SwitchButton name={"personality"}/>
            <SwitchButton name={"purposes"}/>
            <SwitchButton name={"notes"}/>
            <SwitchButton name={"spells"}/>
        </>
    )
}

export const MultiLabel = () => {
    return (
        <Grid item container display={"flex"} height={"100%"} direction={"column"}>
            <Grid item width={"100%"} flex={1   }>
                <SwitchButtonRow/>
            </Grid>
            <Grid item flex={20} mb={12} mr={2}>
                <Box width={"100%"} height={"100%"} border={1} borderColor={"border.main"}></Box>
            </Grid>
        </Grid>
    )
}