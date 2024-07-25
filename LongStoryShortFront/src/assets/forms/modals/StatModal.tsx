import {FC} from "react";
import {Box, Grid, IconButton, Modal, TextField, Typography} from "@mui/material";
import {baseTheme} from "../../../props/theme.ts";
import CloseIcon from '@mui/icons-material/Close';
import {ThemeProvider} from "@mui/material/styles";
import {useThemeProvider} from "../../../providers/ThemeProvider/ThemeProvider.tsx";

type StatModalProps = {
    setOpen: () => void,
    isOpen: boolean,
    statName: string,
    statValue: number,
}

const styles = theme => ({
    textField: {
        WebkitTextFillColor: baseTheme.colors.textColor,
        "& .MuiInput-root": {
            "&:before": {
                borderColor: baseTheme.colors.border
            },
            "&:after": {
                borderColor: baseTheme.colors.border
            },
            "&:hover:not($disabled):not($focused):not($error):before": {
                borderColor: baseTheme.colors.border
            }
        }
    },
    input: {
        color: 'white'
    }
});

export const StatModal: FC<StatModalProps> = (props: StatModalProps) => {
    return (
        <ThemeProvider theme={useThemeProvider}>
            <Modal open={props.isOpen}
                   onClose={() => props.setOpen()}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description"

            >
                <Box>
                    <Box bgcolor={"primary.main"} p={5} sx={{
                        left: "50%",
                        top: "20%",
                        width: "20%",
                        transform: 'translate(-50%, -50%)',
                        position: 'fixed',
                    }}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <Grid container justifyContent={"space-between"}>
                                    <Grid item>
                                        <Typography>
                                            {props.statName}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton disableRipple={true} onClick={props.setOpen} sx={{
                                            color: "text.main",
                                        }}>
                                            <CloseIcon/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container width={"100%"} spacing={5}>
                                    <Grid item width={"50%"}>
                                        <TextField variant={"standard"} helperText={"value"}
                                            // sx={{
                                            //     WebkitTextFillColor: baseTheme.colors.textColor,
                                            //     "& .MuiInput-root": {
                                            //         "&:before": {
                                            //             borderColor: baseTheme.colors.border
                                            //         },
                                            //         "&:after": {
                                            //             borderColor: baseTheme.colors.border
                                            //         },
                                            //         "&:hover:not($disabled):not($focused):not($error):before": {
                                            //             borderColor: baseTheme.colors.border
                                            //         }
                                            //     }
                                            // }}
                                        >

                                        </TextField>
                                    </Grid>
                                    <Grid item width={"50%"}>
                                        <TextField variant={"standard"}></TextField>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </ThemeProvider>
    )
}