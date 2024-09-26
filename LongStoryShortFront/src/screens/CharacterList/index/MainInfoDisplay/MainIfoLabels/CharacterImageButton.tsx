import {StyledCharacterIcon} from "../../../styles/MainInfoLabelStyled.ts";
import {Button} from "@mui/material";
import {useState} from "react";
import {SettingButton} from "./MainInfoMenuButtons/SettingButton.tsx";
import {ChangePortraitMenuButtons} from "./MainInfoMenuButtons/ChangePortraitMenuButton.tsx";
import {DownloadPDFMenuButtons} from "./MainInfoMenuButtons/DownloadPDFMenuButton.tsx";
import {StyledCharacterImageMenu, StyledCharacterImageMenuItem} from "../../../styles/CharacterImageButtonStyled.ts";
import {SettingsModal} from "../../../../../assets/forms/modals/SettingsModal/SettingsModal.tsx";

export const CharacterImageButton = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false)
    const [isChangePortraitModalOpen, setChangePortraitModalOpen] = useState(false)

    const openSettingsModal = () => {
        setSettingsModalOpen(true)
    }
    const closeSettingsModal = () => {
        setSettingsModalOpen(false);
    }
    const openChangePortraitModal = () => {
        setChangePortraitModalOpen(true)
    }
    const closeChangePortraitModal = () => {
        setChangePortraitModalOpen(false)
    }

    const handleOpenClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(true);
    };
    const handleCloseClick = () => {
        setAnchorEl(null);
        setIsOpen(false);
    }

    return (
        <>
            <Button disableRipple onClick={handleOpenClick} disabled={isOpen}
                    sx={{
                        p: "0",
                        "&:focus": {
                            outline: "none",
                        }
                    }}>
                <StyledCharacterIcon
                    srcimage={'https://lss-s3-files.s3.eu-north-1.amazonaws.com/avatar/6497180349365d9d4b3c43b4.webp?mod=1687628351463'}
                    maxheight={"60px"}/>

                <StyledCharacterImageMenu onClose={handleCloseClick} open={isOpen} anchorEl={anchorEl}>
                    <StyledCharacterImageMenuItem onClick={handleCloseClick}>
                        <SettingButton onClick={openSettingsModal}/>
                    </StyledCharacterImageMenuItem>
                    <StyledCharacterImageMenuItem onClick={handleCloseClick}>
                        <ChangePortraitMenuButtons/>
                    </StyledCharacterImageMenuItem>
                    <StyledCharacterImageMenuItem onClick={handleCloseClick}>
                        <DownloadPDFMenuButtons/>
                    </StyledCharacterImageMenuItem>
                </StyledCharacterImageMenu>
            </Button>
            <SettingsModal isOpen={isSettingsModalOpen} setClose={closeSettingsModal}/>
        </>
    )
}