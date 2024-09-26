import {FC} from "react";
import {BaseRightHeaderButton} from "./BaseRightHeaderButton.tsx";
import {useMainStatsStore} from "../../CharacterListData/MainStatsStore.ts";
import {InspirationIconStyled} from "../../styles/BaseRightHeaderButtonStyled.ts";

export const InspirationButton: FC = () => {
    const inspiration = useMainStatsStore(state => state.mainStats.inspiration)
    const setInspiration = useMainStatsStore(state => state.setMainStats)

    const InspirationButtonClickHandler = () => {
        setInspiration({["inspiration"]: !inspiration})
    }

    return (
        <BaseRightHeaderButton name={"Inspiration"} onClick={InspirationButtonClickHandler}
                               children={inspiration ? <InspirationIconStyled/> : null}
        />
    )
}