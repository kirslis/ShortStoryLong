import {FC} from "react";
import {Box, TextField, Typography} from "@mui/material";
import {CharacterIcon} from "../../../index/CharacterIcon.tsx";
import {ClosableLabel} from "../ClosableLabel.tsx";

type StyledTextFieldPros = {
    label: string,
    onChange: (value: string) => void,
    value?: string
};

export const StyledTextField: FC<StyledTextFieldPros> = ({onChange, label, value}: StyledTextFieldPros) => {
    return (
        <Box flex={1}>
            <Box borderBottom={1} borderColor={"border.main"}>
                <TextField variant="standard"
                           InputProps={{
                               disableUnderline: true,
                               style: {
                                   fontSize: "25px"
                               }
                           }}
                           sx={{
                               '& .MuiInputBase-root': {
                                   color: 'text.main',
                               },
                           }}/>
            </Box>
            <Typography variant={"h6"} sx={{
                color: "text.dark"
            }}>
                {label}
            </Typography>
        </Box>
    )
}

export const PersonalityLabel: FC = () => {

    const BackgroundFieldChangeHandle = (value: string) => {

    }

    return (
        <Box display={"flex"} flexDirection={"column"} rowGap={"10px"}>
            <Box width={"100%"} display={"flex"} columnGap={"40px"}>
                <StyledTextField label={"background"} onChange={BackgroundFieldChangeHandle} value={""}/>
                <StyledTextField label={"worldview"} onChange={BackgroundFieldChangeHandle} value={""}/>
            </Box>
            <Box display={"flex"} columnGap={"20px"}>
                <CharacterIcon maxWidth={"250px"}/>
                <Box>
                    <Box width={"100%"} display={"flex"} columnGap={"40px"}>
                        <StyledTextField label={"height"} onChange={BackgroundFieldChangeHandle} value={""}/>
                        <StyledTextField label={"weight"} onChange={BackgroundFieldChangeHandle} value={""}/>
                    </Box>
                    <Box width={"100%"} display={"flex"} columnGap={"40px"}>
                        <StyledTextField label={"age"} onChange={BackgroundFieldChangeHandle} value={""}/>
                        <StyledTextField label={"eyes"} onChange={BackgroundFieldChangeHandle} value={""}/>
                    </Box>
                    <Box width={"100%"} display={"flex"} columnGap={"40px"}>
                        <StyledTextField label={"skin"} onChange={BackgroundFieldChangeHandle} value={""}/>
                        <StyledTextField label={"hair"} onChange={BackgroundFieldChangeHandle} value={""}/>
                    </Box>
                </Box>
            </Box>
            <ClosableLabel name={"the background of the character"} value={""}/>
            <ClosableLabel name={"allies and organizations"} value={""}/>
            <ClosableLabel name={"character traits"} value={""}/>
            <ClosableLabel name={"ideals"} value={""}/>
            <ClosableLabel name={"attachments"} value={""}/>
            <ClosableLabel name={"weaknesses"} value={""}/>
        </Box>
    )
}