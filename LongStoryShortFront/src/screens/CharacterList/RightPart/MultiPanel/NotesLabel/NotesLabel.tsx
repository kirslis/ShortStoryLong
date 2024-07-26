import {FC} from "react";
import {Box} from "@mui/material";
import {ClosableLabel} from "../ClosableLabel.tsx";

export const NotesLabel: FC = () => {
    return(
        <Box>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
        </Box>
    )
};