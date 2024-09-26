import {FC} from "react";
import {Box} from "@mui/material";
import {ClosableLabel} from "../ClosableLabel.tsx";
import {StyledCharacterIcon} from "../../../styles/MainInfoLabelStyled.ts";
import {ClosableTextsWrapper} from "../../../styles/MultiPanelStyled.ts";
import {UnderlinedTextField} from "../../../../../assets/forms/parts/UnderlinedTextField.tsx";

export const PersonalityLabel: FC = () => {

    const BackgroundFieldChangeHandle = (value: string) => {

    }

    return (
        <ClosableTextsWrapper >
            <Box width={"100%"} display={"flex"} columnGap={"40px"}>
                <UnderlinedTextField label={"BACKGROUND"} onChange={BackgroundFieldChangeHandle} value={""}/>
                <UnderlinedTextField label={"WORLDVIEW"} onChange={BackgroundFieldChangeHandle} value={""}/>
            </Box>
            <Box display={"flex"} columnGap={"20px"}>
                <StyledCharacterIcon maxheight={"200px"} flex={1} srcimage={'https://lss-s3-files.s3.eu-north-1.amazonaws.com/avatar/6497180349365d9d4b3c43b4.webp?mod=1687628351463'}/>
                <Box flex={2} display={"flex"} flexDirection={"column"} rowGap={"12px"}>
                    <Box width={"100%"} display={"flex"} columnGap={"40px"}>
                        <UnderlinedTextField label={"HEIGHT"} onChange={BackgroundFieldChangeHandle} value={""}/>
                        <UnderlinedTextField label={"WEIGHT"} onChange={BackgroundFieldChangeHandle} value={""}/>
                    </Box>
                    <Box width={"100%"} display={"flex"} columnGap={"40px"}>
                        <UnderlinedTextField label={"AGE"} onChange={BackgroundFieldChangeHandle} value={""}/>
                        <UnderlinedTextField label={"EYES"} onChange={BackgroundFieldChangeHandle} value={""}/>
                    </Box>
                    <Box width={"100%"} display={"flex"} columnGap={"40px"}>
                        <UnderlinedTextField label={"SKIN"} onChange={BackgroundFieldChangeHandle} value={""}/>
                        <UnderlinedTextField label={"HAIR"} onChange={BackgroundFieldChangeHandle} value={""}/>
                    </Box>
                </Box>
            </Box>
            <ClosableLabel name={"the background of the character"} value={""}/>
            <ClosableLabel name={"allies and organizations"} value={""}/>
            <ClosableLabel name={"character traits"} value={""}/>
            <ClosableLabel name={"ideals"} value={""}/>
            <ClosableLabel name={"attachments"} value={""}/>
            <ClosableLabel name={"weaknesses"} value={""}/>
        </ClosableTextsWrapper>
    )
}