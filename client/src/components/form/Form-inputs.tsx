import { InputAdornment, TextField } from "@mui/material";

export const FormInputs = ({
		values,
		errors,
		handleChange,
		handleBlur,
	}: any) => {
    return (
        <>
            <TextField
                error={!!errors.procedure}
                id="outlined-uncontrolled"
                label="Procedimiento"
                value={values.procedure || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                name="procedure"
                helperText={errors.procedure}
            />
            <TextField
                error={!!errors.code}
                id="outlined-uncontrolled"
                label="Código"
                value={values.code || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                name="code"
                helperText={errors.code}
            />
            <TextField
                error={!!errors.reclaim}
                id="outlined-uncontrolled"
                label="Reclamación"
                value={values.reclaim || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                name="reclaim"
                helperText={errors.reclaim}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">RD$</InputAdornment>
                    ),
                }}
            />
            <TextField
                error={!!errors.difference}
                id="outlined-uncontrolled"
                label="Diferencia"
                value={values.difference || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                name="difference"
                helperText={errors.difference}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">RD$</InputAdornment>
                    ),
                }}
            />
            <TextField
                error={!!errors.authorized}
                id="outlined-uncontrolled"
                label="Autorizado"
                value={values.authorized || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                name="authorized"
                helperText={errors.authorized}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">RD$</InputAdornment>
                    ),
                }}
            />
        </>
    );
};
