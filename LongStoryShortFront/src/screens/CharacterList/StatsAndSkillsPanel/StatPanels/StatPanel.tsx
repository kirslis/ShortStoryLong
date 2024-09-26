import {FC, useState} from "react";
import {Box, Grid} from "@mui/material";
import {
    PassiveFeelingsAndLanguage
} from "../PassiveFeelingsAndLanguage.tsx";
import {StrengthModal} from "../../../../assets/forms/modals/StatsModals/StrengthModal.tsx";
import {DexterityModal} from "../../../../assets/forms/modals/StatsModals/DexterityModal.tsx";
import {ConstitutionModal} from "../../../../assets/forms/modals/StatsModals/ConstitutionModal.tsx";
import {WisdomModal} from "../../../../assets/forms/modals/StatsModals/WisdomModal.tsx";
import {CharismaModal} from "../../../../assets/forms/modals/StatsModals/CharismaModal.tsx";
import {IntelligenceModal} from "../../../../assets/forms/modals/StatsModals/IntelligenceModal.tsx";
import {StrengthPanel} from "./StrengthPanel.tsx";
import {ConstitutionPanel} from "./ConstitutionPanel.tsx";
import {IntelligencePanel} from "./IntelligencePanel.tsx";
import {CharismaPanel} from "./CharismaPanel.tsx";
import {DexterityPanel} from "./DexterityPanel.tsx";
import {WisdomPanel} from "./WisdomPanel.tsx";
import {gap} from "./statsPanelProps.ts";


export const StatPanel: FC = () => {
    const [isStrengthModalOpen, setIsStrengthModalOpen] = useState<boolean>(false)
    const [isDexterityModalOpen, setIsDexterityModalOpen] = useState<boolean>(false)
    const [isConstitutionModalOpen, setIsConstitutionModalOpen] = useState<boolean>(false)
    const [isWisdomModalOpen, setIsWisdomModalOpen] = useState<boolean>(false)
    const [isIntelligenceModalOpen, setIsIntelligenceModalOpen] = useState<boolean>(false)
    const [isCharismaModalOpen, setIsCharismaModalOpen] = useState<boolean>(false)

    return (
        <>
            <Box>
                <Grid container width={"100%"} spacing={"10px"}>
                    <Grid item container direction={"column"} width={"50%"} height={"100%"} rowGap={gap}>
                        <StrengthPanel onModalOpen={() => (setIsStrengthModalOpen(true))}/>
                        <ConstitutionPanel onModalOpen={() => (setIsConstitutionModalOpen(true))}/>
                        <IntelligencePanel onModalOpen={() => (setIsIntelligenceModalOpen(true))}/>
                        <CharismaPanel onModalOpen={() => (setIsCharismaModalOpen(true))}/>
                    </Grid>
                    <Grid item container direction={"column"} width={"50%"} rowGap={gap}>
                        <DexterityPanel onModalOpen={() => (setIsDexterityModalOpen(true))}/>
                        <WisdomPanel onModalOpen={() => (setIsWisdomModalOpen(true))}/>
                        <PassiveFeelingsAndLanguage onIntelligenceModalOpen={() => {
                            setIsIntelligenceModalOpen(true)
                        }} onWisdomModalOped={() => {
                            setIsWisdomModalOpen(true)
                        }}/>
                    </Grid>
                </Grid>
            </Box>

            <StrengthModal isOpen={isStrengthModalOpen} onClose={() => (setIsStrengthModalOpen(false))}/>
            <DexterityModal isOpen={isDexterityModalOpen} onClose={() => (setIsDexterityModalOpen(false))}/>
            <ConstitutionModal isOpen={isConstitutionModalOpen} onClose={() => (setIsConstitutionModalOpen(false))}/>
            <IntelligenceModal isOpen={isIntelligenceModalOpen} onClose={() => (setIsIntelligenceModalOpen(false))}/>
            <WisdomModal isOpen={isWisdomModalOpen} onClose={() => (setIsWisdomModalOpen(false))}/>
            <CharismaModal isOpen={isCharismaModalOpen} onClose={() => (setIsCharismaModalOpen(false))}/>
        </>
    )
}