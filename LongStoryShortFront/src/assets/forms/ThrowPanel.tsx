import {Box, Button, Grid, Typography} from "@mui/material";
import {FC, useState} from "react";
import {StatModal} from "./modals/StatModal.tsx";

type panelData = {
    name: string,
    value: number
}

export const ThrowPanel: FC<panelData> = (props: panelData) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalClose = () => setModalOpen(false);
    const handleModalOpen = () => setModalOpen(true);

    return (
        <>
            <Grid container width={"100%"}>
                <Grid item alignContent={"center"} width={"78%"}>
                    <Button disableRipple fullWidth onClick={handleModalOpen} sx={{
                        border: 1,
                        borderColor: "border.main",
                        borderRadius: "10px",
                        bgcolor: "background.paper",
                        "&:hover": {
                            borderColor: "border.main",
                            bgcolor: "background.paper",
                        }
                    }}>
                            <Typography variant="subtitle2" color={"text.main"}>
                                {props.name}
                            </Typography>
                    </Button>
                </Grid>
                <Grid item alignContent={"center"} width={"12%"}>
                    <Button disableRipple onClick={handleModalOpen} width={"100%"} sx={{
                        border: 1,
                        bgcolor: "secondary.main",
                        borderColor: "border.main",
                        borderRadius: "7px",
                        transform: "translate(-15%, 0%)",
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
                </Grid>
            </Grid>
            <StatModal setOpen={handleModalClose} isOpen={modalOpen} statName={props.name} statValue={props.value}/>
        </>
    )
}