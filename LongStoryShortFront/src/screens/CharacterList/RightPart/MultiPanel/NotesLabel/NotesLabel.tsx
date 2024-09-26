import {FC} from "react";
import {ClosableLabel} from "../ClosableLabel.tsx";
import {ClosableTextsWrapper} from "../../../styles/MultiPanelStyled.ts";

export const NotesLabel: FC = () => {
    return(
        <ClosableTextsWrapper display={"flex"} flexDirection={"column"} gap={"10px"}>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
           <ClosableLabel name={"notes"} value={""}/>
        </ClosableTextsWrapper>
    )
};