import {Divider, styled} from "@mui/material";

export const CharacteristicsDividerStyled = styled(Divider)`
    flex-grow: 1;
    align-self: center;
    border-width: 1px;
    border-color: ${(props) =>  props.theme.palette.border.main};
`