import {Box, Button, Card, CardHeader} from "@mui/material";
import {TField} from "../assets/forms/TField.tsx";
import {FC, useState} from "react";
import {baseTheme} from "../props/theme.ts"
import {config} from "../props/config.ts";
import {useNavigate} from "react-router-dom";

type NewAccountData = {
    accountName: string;
    username: string,
    password: string
    confirmationPassword: string
}

type NewAccountDataError = {
    noAccountName: boolean,
    noUsername: boolean,
    noPassword: boolean,
    noConfirmationPassword: boolean,
}

export const CreateAccountScreen: FC = () => {
    const [newAccountData, setNewAccountData] = useState<NewAccountData>({
        accountName: "", username: "", password: "", confirmationPassword: "",
    })
    const [newAccountDataError, setNewAccountDataError] = useState<NewAccountDataError>({
        noAccountName: false, noUsername: false, noPassword: false, noConfirmationPassword: false
    })
    const [loginError, setLoginError] = useState<boolean>(false)
    const navigate = useNavigate()

    const accountNameTextFieldChangeHandler = (value: string) => {
        setNewAccountData({
            ...newAccountData,
            accountName: value
        })
    }
    const usernameTextFieldChangeHandler = (value: string) => {
        setNewAccountData({
            ...newAccountData,
            username: value,
        })
    }
    const passwordTextFieldChangeHandler = (value: string) => {
        setNewAccountData({
            ...newAccountData,
            password: value,
        })
    }
    const confirmationPasswordTextFieldChangeHandler = (value: string) => {
        setNewAccountData({
            ...newAccountData,
            confirmationPassword: value
        })
    }


    async function createNewUserAccount() {
        try {
            const response = await fetch(config.serverHTTPS + `login/create_account`, {
                method: 'POST',
                body: JSON.stringify({
                    accountName: newAccountData.accountName,
                    username: newAccountData.username,
                    userPassword: newAccountData.password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`)
            }
            return (await response.json()) as number;
        } catch (error) {
            setLoginError(true)
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    async function createAccountButtonClickHandler() {
        setNewAccountDataError({
            noAccountName: newAccountData.accountName == "",
            noUsername: newAccountData.username == "",
            noPassword: newAccountData.password == "",
            noConfirmationPassword: newAccountData.confirmationPassword != newAccountData.password
        })
        if (
            !newAccountDataError.noAccountName &&
            !newAccountDataError.noUsername &&
            !newAccountDataError.noPassword &&
            !newAccountDataError.noConfirmationPassword
        ) {
            const result = await createNewUserAccount();
            if (typeof (result) === "number") {
                sessionStorage.setItem("accountId", result.toString())
                sessionStorage.setItem("password", newAccountData.password.toString())
                navigate('/characters/hero')
            } else {
                setLoginError(true)
            }
        }
    }

    return (
        <div>
            <Card sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: baseTheme.colors.secondary,
                padding: 1
            }}>
                <CardHeader title="Create new account" sx={{
                    color: baseTheme.colors.textColor
                }}/>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TField label="account name" onChange={accountNameTextFieldChangeHandler}
                            isError={newAccountDataError.noAccountName}/>
                    <TField label="username" onChange={usernameTextFieldChangeHandler}
                            isError={newAccountDataError.noUsername}/>
                    <TField label="password" onChange={passwordTextFieldChangeHandler}
                            isError={newAccountDataError.noPassword}/>
                    <TField label="confirm password" onChange={confirmationPasswordTextFieldChangeHandler}
                            isError={newAccountDataError.noConfirmationPassword}/>
                    <Button variant="contained" onClick={createAccountButtonClickHandler}>Create account</Button>
                    {loginError ? (
                        <CardHeader title="username or account name may be already used"
                                    titleTypographyProps={{variant: 'subtitle2'}}
                                    sx={{
                                        color: baseTheme.colors.error,
                                    }}/>) : null
                    }
                </Box>
            </Card>
        </div>
    )
}