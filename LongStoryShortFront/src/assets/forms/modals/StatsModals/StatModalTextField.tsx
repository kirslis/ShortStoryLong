import {Box, Grid, TextField} from "@mui/material";
import {FC} from "react";
import {StyledTextLabel} from "../../../../screens/CharacterList/styles/IndexStyled.ts";

interface IStatModalTextField {
    value: number,
    helperText: string,
    changeHandler: (value: string) => (void)
}

export const StatModalTextField: FC<IStatModalTextField> = ({value, helperText, changeHandler}: IStatModalTextField) => {
    return (
        <Grid item>
            <Box borderBottom={1} borderColor={"border.main"}>
                <TextField value={value != 0 ? value : ""} onChange={(e) => changeHandler(e.target.value)} variant={"standard"} InputProps={{
                    disableUnderline: true,
                    sx: {
                        color: "textColor.main",
                        fontSize: "20px",
                    }
                }}>
                </TextField>
            </Box>
            <StyledTextLabel variant={"h3"} dark={"true"}>
                {helperText}
            </StyledTextLabel>
        </Grid>
    )
}