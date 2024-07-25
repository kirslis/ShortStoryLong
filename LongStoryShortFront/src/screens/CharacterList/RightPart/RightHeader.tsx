import {FC} from "react";
import {Button, Grid, MenuItem, Select, Typography} from "@mui/material";

const exhaustionOptions = [
    {value: "0", label: "0"},
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
    {value: "4", label: "4"},
    {value: "5", label: "5"},
    {value: "6", label: "6"},
];

export const RightHeader: FC = () => {
    return (
        <Grid item container width={"100%"} direction={"column"}>
            <Grid item container width={"100%"} direction={"row"} spacing={1}>
                <Grid item container flex={1} align={"center"} direction={"column"} justifyContent={"space-between"}>
                    <Button fullWidth sx={{
                        border: 1,
                        borderColor: "border.main",
                        bgcolor: "secondary.main",
                        flex: 1,
                        borderRadius: "10px",
                        "&:hover": {
                            backgroundColor: "secondary.main",
                            borderColor: "border.main"
                        }
                    }}>
                        <Typography variant={"h5"} color={"text.main"}>
                            -1
                        </Typography>
                    </Button>
                    <Typography variant={"h6"} color={"text.main"}>
                        Initiative
                    </Typography>
                </Grid>
                <Grid item container flex={1} align={"center"} direction={"column"}>
                    <Button fullWidth sx={{
                        border: 1,
                        borderColor: "border.main",
                        bgcolor: "secondary.main",
                        flex: 1,
                        "&:hover": {
                            backgroundColor: "secondary.main",
                            borderColor: "border.main"
                        }
                    }}>
                        <Typography variant={"h5"} color={"text.main"}>
                            sun
                        </Typography>
                    </Button>
                    <Typography variant={"h6"} color={"text.main"}>
                        inspiration
                    </Typography>
                </Grid>
                <Grid item container flex={1} align={"center"} direction={"column"}>
                    <Select fullWidth sx={{
                        bgcolor: "secondary.main",
                        border: 1,
                        borderColor: "border.main",
                        color: "text.main",
                        fontSize: "17px",
                        '& .MuiSvgIcon-root': {
                            color: "text.main"
                        }
                    }}>
                        {exhaustionOptions.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <Typography variant={"h6"} color={"text.main"}>
                        exhaustion
                    </Typography>
                </Grid>
                <Grid item container flex={6} height={"100%"} color={"white"} align={"center"} direction={"column"}
                      justifyContent={"space-between"}>
                    <Button fullWidth height={"100%"} sx={{
                        bgcolor: "secondary.main",
                        flex: 1,
                        border: 1,
                        borderColor: "border.main"
                    }}>
                        <Grid container alignItems={"center"} direction={"column"} justifyContent={"space-between"}
                              sx={{
                                  height: "100%"
                              }}>
                            <Typography color={"text.main"} variant={"h6"}>
                                невидимый, недееспособный
                            </Typography>
                            <Typography color={"text.main"} variant={"subtitle2"}>
                                states
                            </Typography>
                        </Grid>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
