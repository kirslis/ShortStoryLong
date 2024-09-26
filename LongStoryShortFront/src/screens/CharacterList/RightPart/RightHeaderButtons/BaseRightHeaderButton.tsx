import {FC} from "react";
import {Grid} from "@mui/material";
import {StyledTextLabel} from "../../styles/IndexStyled.ts";
import {RightHeaderButtonStyled} from "../../styles/RightHeaderButtonStyled.ts";

interface IBaseRightHeaderButton {
    children: React.ReactNode,
    name: string,
    onClick?: () => void,
}

export const BaseRightHeaderButton: FC<IBaseRightHeaderButton> = (props: IBaseRightHeaderButton) => {
    return (
        <Grid item container direction={"column"} alignItems={"center"} spacing={"3px"} width={"100%"}>
            <Grid item>
                <RightHeaderButtonStyled onClick={props.onClick}>
                    {props.children}
                </RightHeaderButtonStyled>
            </Grid>
            <Grid item>
                <StyledTextLabel variant={"h5"}>
                    {props.name}
                </StyledTextLabel>
            </Grid>
        </Grid>
    )
}