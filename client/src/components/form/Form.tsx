import {
    Box,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField,
} from "@mui/material";

export const Form = () => {
    return (
        <div>
            <h1>Form</h1>

            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                />
            </Box>
        </div>
    );
};
