import {FC, useState} from "react";
import {Box, Button, Collapse, TextField, Typography} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type ClosableLabelProps = {
    name: string,
    value: string
}

export const ClosableLabel: FC<ClosableLabelProps> = ({name, value}: ClosableLabelProps) => {
    const [isOpened, setIsOpened] = useState(true)

    const closeButtonClickHandler = () => {
        setIsOpened(!isOpened)
    }

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} flex={1} justifyContent={"start"} alignItems={"center"}>
                <Typography color={"text.main"} variant={"h6"}>
                    {name}
                </Typography>
                <Button disableRipple onClick={closeButtonClickHandler} sx={{
                    minWidth: "10px"
                }}>
                    {isOpened ? <KeyboardArrowUpIcon sx={{
                        color: "text.main"
                    }}/> : <KeyboardArrowDownIcon sx={{
                        color: "text.main"
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