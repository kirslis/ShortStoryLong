import {Box, Button, Grid, Typography} from "@mui/material";
import {FC} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useThemeProvider} from "../../providers/ThemeProvider/ThemeProvider.tsx";
import {ThemeProvider} from "@mui/material/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Header: FC = () => {
    const navigate = useNavigate();
    const theme = useThemeProvider();
    const createAccountButtonClickHandle = () => {
        navigate("create_account")
    }

    return (
        <ThemeProvider theme={theme}>
            <Box display={"flex"} flexDirection={"column"} bgcolor={"background.paper"}
                // overflow={"clip"}
                 sx={{
                     width: '100vw',
                     height: '105vh',
                 }}>
                <Box  width={"100%"} height={"67px"} sx={{
                    borderBottom: 1,
                    borderColor: "border.main"
                }}>
                    <Box bgcolor={"header.main"}>
                        <Grid container justifyContent="space-between" pr={2}>
                            <Grid item>
                                <Grid container direction="row" spacing={2}>
                                    <Grid item>
                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container justifyContent={"end"} direction={"column"} alignItems={"end"}>
                                    <Grid item px={1}>
                                        <AccountCircleIcon
                                            color={(sessionStorage.getItem("accountId")) ? "primary" : "error"} sx={{
                                            fontSize: "36px"
                                        }}/>
                                    </Grid>
                                    <Grid item>
                                        {(!sessionStorage.getItem("accountId")) ?
                                            <Button onClick={createAccountButtonClickHandle}>
                                                <Typography variant={"h4"} color={"error.main"}>
                                                    create account
                                                </Typography>
                                            </Button> :
                                            null
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box >
                    <Outlet/>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
