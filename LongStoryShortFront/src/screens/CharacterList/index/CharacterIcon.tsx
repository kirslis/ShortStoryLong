import {FC} from "react";
import {Box} from "@mui/material";

type CharacterIconProps = {
    maxWidth: string
}

export const CharacterIcon: FC<CharacterIconProps> = ({maxWidth}: CharacterIconProps) => {
    return (
        <Box width={maxWidth} component="img"
             src={'https://lss-s3-files.s3.eu-north-1.amazonaws.com/avatar/6497180349365d9d4b3c43b4.webp?mod=1687628351463'}
             border={1}
             borderColor={"border.main"}
             borderRadius={2}>
        </Box>
    )
}