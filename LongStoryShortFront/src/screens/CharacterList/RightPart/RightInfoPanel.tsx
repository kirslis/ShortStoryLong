import {FC, useState} from "react";
import {Grid} from "@mui/material";
import {RightHeader} from "./RightHeader.tsx";
import {MultiLabel} from "./MultiPanel/MultiLabel.tsx";



export const RightInfoPanel: FC = () => {

    return (
        <Grid item container height={"100%"} direction={"column"}>
            <Grid item width={"100%"} flex={1}>
                <RightHeader/>
            </Grid>
            <Grid item width={"100%"} flex={10}>
                <MultiLabel/>
            </Grid>
        </Grid>
    )
}