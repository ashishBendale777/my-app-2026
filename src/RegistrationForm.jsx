import React, { useActionState } from 'react'
import {
    Box,
    TextField,
    Button,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";
import { useFormStatus } from 'react-dom';


/* ===============================
   SUBMIT BUTTON
   =============================== */
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={pending}
            sx={{ mt: 2 }}
        >
            {pending ? <CircularProgress size={24} /> : "Register"}
        </Button>
    );
}

/* ===============================
   FORM ACTION (Business Logic)
   =============================== */
async function registerUser(prevState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");

    // validation
    if (!name || !email) {
        return {
            success: false,
            message: "Name and Email are required",
        };
    }

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
        success: true,
        message: `User ${name} registered successfully`,
    };
}

const RegistrationForm = () => {
    const [state, formAction] = useActionState(registerUser, {
        success: false,
        message: "",
    });

    return (
        <>
            <Box
                component="form"
                action={formAction}
                sx={{
                    maxWidth: 420,
                    mx: "auto",
                    mt: 6,
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    React 19 + MUI Form
                </Typography>

                {state.message && (
                    <Alert
                        severity={state.success ? "success" : "error"}
                        sx={{ mb: 2 }}
                    >
                        {state.message}
                    </Alert>
                )}

                <TextField
                    name="name"
                    label="Full Name"
                    fullWidth
                    required
                    margin="normal"
                />

                <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                />

                <SubmitButton />
            </Box>

        </>
    )
}

export default RegistrationForm