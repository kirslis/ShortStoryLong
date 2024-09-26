import {FC, useState} from "react";
import {Box, Button, Collapse, TextField} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {StyledTextLabel} from "../../styles/IndexStyled.ts";

interface IClosableLabelProps {
    name: string,
    value: string
}

export const ClosableLabel = (props: IClosableLabelProps) => {
    const [isOpened, setIsOpened] = useState(true)

    const closeButtonClickHandler = () => {
        setIsOpened(!isOpened)
    }

    return (
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Box display={"flex"} flex={1} justifyContent={"start"} alignItems={"center"} gap={"5px"}>
                <StyledTextLabel  variant={"h4"} dark={"true"}>
                    {props.name.toUpperCase()}
                </StyledTextLabel>
                <Button disableRipple onClick={closeButtonClickHandler} sx={{
                    minWidth:"10px",
                    width:"10px",
                    height: "10px"
                }}>
                    {isOpened ? <KeyboardArrowUpIcon sx={{
                        color: "textColor.main"
                    }}/> : <KeyboardArrowDownIcon sx={{
                        color: "textColor.main"
                    }}/>}
                </Button>
            </Box>
            <Box border={1} borderColor={"border.main"}>
                <Collapse in={isOpened}>
                    <TextField variant={"standard"} multiline fullWidth InputProps={{
                        disableUnderline: true,
                    }} sx={{
                        mx: "10px",
                        '& .MuiInputBase-root': {
                            color: 'text.main',
                        },
                    }}>

                    </TextField>
                </Collapse>
            </Box>
        </Box>
    )
}