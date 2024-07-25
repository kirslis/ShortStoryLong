import {Box, Button, Card, Grid, Typography} from "@mui/material";
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
            <Grid sx={{
                width: '100vw',
                height: '100vh',
                spacing: 0,
                justify: 'space-around'
            }}>
                <Card sx={{
                    backgroundColor: "header.main",
                    borderBottom: 1,
                    borderColor: "border.main"
                }}>
                    <Grid container justifyContent="space-between" p={2}>
                        <Grid item>
                            <Grid container direction="row" spacing={2}>
                                <Grid item>
                                </Grid>
                                <Grid item>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justifyContent={"flex-end"} direction={"column"} alignItems={"end"}>
                                <Grid item px={1}>
                                    <AccountCircleIcon
                                        color={(sessionStorage.getItem("accountId")) ? "primary" : "error"} sx={{
                                        fontSize: "70px"
                                    }}/>
                                </Grid>
                                <Grid item>
                                    {(!sessionStorage.getItem("accountId")) ?
                                        <Button onClick={createAccountButtonClickHandle}>
                                            <Typography color={"error.main"}>
                                                create account
                                            </Typography>
                                        </Button> :
                                        null
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
                <Box sx={{
                    width: "100%",
                }}>
                    <Outlet/>
                </Box>
            </Grid>
        </ThemeProvider>
    )
}
