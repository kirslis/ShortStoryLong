import {Box, Grid, IconButton} from "@mui/material";
import {StyledTextLabel} from "../../../screens/CharacterList/styles/IndexStyled.ts";
import CloseIcon from "@mui/icons-material/Close";

interface ILeftModalHeader{
    name: string,
    onClose: () => (void),
}

export const LeftModalHeader = (props: ILeftModalHeader) => {
    return(
        <Grid item container justifyContent={"space-between"} height={"70px"} alignItems={"center"}>
            <Box></Box>
            <StyledTextLabel variant={"h1"}>{props.name.toUpperCase()}</StyledTextLabel>
            <IconButton disableRipple={true} onClick={props.onClose} sx={{
                height: "fit-content"
            }}>
                <CloseIcon sx={{
                    color: "textColor.main"
                }}/>
            </IconButton>
        </Grid>
    )
}