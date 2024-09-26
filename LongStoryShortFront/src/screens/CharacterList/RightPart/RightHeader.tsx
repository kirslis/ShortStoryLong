import {FC} from "react";
import {Grid} from "@mui/material";
import {ConditionsListPanel} from "./RightHeaderButtons/ConditionsListPanel.tsx";
import {InitiativeButton} from "./RightHeaderButtons/InitiativeButton.tsx";
import {InspirationButton} from "./RightHeaderButtons/InspirationButton.tsx";
import {ExhaustionButtons} from "./RightHeaderButtons/ExhaustionButton.tsx";


export const RightHeader: FC = () => {
    return (
        <Grid item container width={"100%"} direction={"column"}>
            <Grid item container width={"100%"} direction={"row"} spacing={'2px'}>
                <Grid item container flex={1}>
                    <InitiativeButton/>
                </Grid>
                <Grid item container flex={1}>
                    <InspirationButton/>
                </Grid>
                <Grid item container flex={1}>
                    <ExhaustionButtons/>
                </Grid>
                <Grid item container flex={6} >
                   <ConditionsListPanel/>
                </Grid>
            </Grid>
        </Grid>
    )
}
