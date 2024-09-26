import {StyledTextLabel, StyledUnderlinedInputField} from "../../../screens/CharacterList/styles/IndexStyled.ts";
import {Box} from "@mui/material";

interface IUnderlinedTextField {
    label: string;
    onChange: (value: string) => (void);
    value: string;
    width?: string;
}

export const UnderlinedTextField = (props: IUnderlinedTextField) => {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={"5px"} width={props.width ? props.width : "100%"}>
            <Box borderBottom={1} borderColor={"border.main"}>
                <StyledUnderlinedInputField  variant="standard"
                                             value={props.value}
                                             onChange={(e) => props.onChange(e.target.value)}
                                            InputProps={{
                                                disableUnderline: true,
                                                style: {
                                                    fontSize: "20px"
                                                }
                                            }}/>
            </Box>
            <StyledTextLabel variant={"h4"} dark={"true"}>
                {props.label.toUpperCase()}
            </StyledTextLabel>
        </Box>
    )
}

