import {Box, Button, Card, CardContent, CardHeader} from '@mui/material'
import {baseTheme} from "../props/theme.ts";
import {FC, useState} from "react";
import {config} from "../props/config.ts";
import {TField} from "../assets/forms/TField.tsx";
import {useNavigate} from "react-router-dom";

type UserData = {
    accountName: string,
    password: string
};

type UserDataError = {
    noAccountName: boolean,
    noPassword: boolean
}


export const LoginScreen: FC = () => {
    const [userData, setUserData] = useState<UserData>({accountName: "", password: ""});
    const [validationError, setValidationError] = useState<boolean>(false);
    const [validationInProgress, setValidationInProgress] = useState<boolean>(false);
    const [userDataError, setUserDataError] = useState<UserDataError>({noAccountName: false, noPassword: false})
    const navigate = useNavigate()

    function accountNameTextFieldChangeHandler(value: string) {
        setUserData({accountName: value, password: userData.password})
    }

    function passwordTextFieldChangeHandler(value: string) {
        setUserData({accountName: userData.accountName, password: value})
    }

    async function getUserValidation() {
        try {

            const response = await fetch(config.serverHTTPS + `login?username=${userData.accountName}&password=${userData.password}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`)
            }

            const result = (await response.json()) as number;

            console.log('result is: ', JSON.stringify(result, null, 4));

            return result;
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    async function loginButtonClickHandler() {

        setUserDataError({noAccountName: (userData.accountName == ""), noPassword: (userData.password == "")})
        if (!userDataError.noPassword && !userDataError.noAccountName) {
            setValidationError(false);
            setValidationInProgress(true);
            const result = await getUserValidation();

            if (typeof (result) === "number") {
                setValidationInProgress(false);
                setValidationError(false);
                sessionStorage.setItem("accountId", result.toString())
                sessionStorage.setItem("password", userData.password.toString())
                navigate('/characters/hero')
            } else {
                setValidationInProgress(false);
                setValidationError(true);
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
                bgcolor: baseTheme.colors.secondary

            }}>
                <CardHeader title="Input password and Login" sx = {{
                    color: baseTheme.colors.textColor
                }}/>
                <CardContent>
                    <Box display="flex" flexDirection="column" gap={2} >
                        <TField label="Account name" onChange={accountNameTextFieldChangeHandler}
                                value={userData.accountName} isError={userDataError.noAccountName}/>
                        <TField label="Password" onChange={passwordTextFieldChangeHandler} value={userData.password}
                                isError={userDataError.noPassword}/>
                        <Box display="flex" flexDirection="column" gap={1} alignItems="start" marginTop="auto">
                            <Button variant="contained" onClick={() => loginButtonClickHandler()}>Sign in</Button>
                            <Button variant="text">create account</Button>
                        </Box>
                    </Box>
                    <Box>
                        {validationError ? (
                            <CardHeader title="Wrond login or password"
                                        titleTypographyProps={{variant:'subtitle2' }}
                                        sx = {{
                                            color: baseTheme.colors.error
                                        }}/>) : null}
                        {validationInProgress ? (
                            <CardHeader title="waiting..."
                                        titleTypographyProps={{variant:'subtitle2' }}
                                        sx = {{
                                            color: baseTheme.colors.textColor,
                                        }}/>) : null}
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

