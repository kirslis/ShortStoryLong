import {Box} from "@mui/material";
import {StyledTextLabel} from "../../../../styles/IndexStyled.ts";

interface IBaseMainInfoMenuButton {
    icon: JSX.Element,
    text: string,
    onClick: () => (void)
}

export const BaseMainInfoMenuButtons = (props: IBaseMainInfoMenuButton) => {
    return (
        <Box  display={"flex"} onClick={props.onClick} gap={"5px"}>
            {props.icon}
            <StyledTextLabel variant="h3" normal={"true"} dark={"true"}>
                {props.text}
            </StyledTextLabel>
        </Box>
    )
}