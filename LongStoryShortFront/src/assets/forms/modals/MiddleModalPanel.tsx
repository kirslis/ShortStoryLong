import {Box, Grid, IconButton, Modal} from "@mui/material";
import {MiddleModalBox} from "../../../screens/CharacterList/styles/ModalsStyled.ts";
import {StyledTextLabel} from "../../../screens/CharacterList/styles/IndexStyled.ts";
import CloseIcon from "@mui/icons-material/Close";

export interface IMiddleModalPanel {
    isOpen: boolean;
    statName: string;
    statMod?: number
    onClose: () => void;
    children?: JSX.Element;
}

export const MiddleModalPanel = (props: IMiddleModalPanel) => {
    return (
        <Modal open={props.isOpen}
               onClose={() => props.onClose()}>
            <Box>
                <MiddleModalBox>
                    <Grid container direction={"column"} width={"100%"} height={"100%"}
                          justifyContent={"space-between"}>
                        <Grid item container justifyContent={"space-between"}>
                            <StyledTextLabel variant={"h1"}>
                                {props.statName} {props.statMod ? <>{props.statMod > 0 ? '+' : ''}{props.statMod}</> : null}
                            </StyledTextLabel>
                            <IconButton disableRipple={true} onClick={props.onClose} sx={{
                                color: "textColor.main",
                                height: "fit-content"
                            }}>
                                <CloseIcon/>
                            </IconButton>
                        </Grid>
                        {props.children}
                    </Grid>
                </MiddleModalBox>
            </Box>
        </Modal>
    )
}