import { Check } from "@mui/icons-material";
import { Alert, Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { api } from "../../config";

import { useFields } from "../../hooks";
import { http } from "../../services";
import { defaultFieldValues } from "./default-input-data";

export const Form = () => {
    const { values, errors, reset, handleChange, handleBlur, existSomeError } =
        useFields(defaultFieldValues);

    const handleReset = () => {
        reset();
    };

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (addProcedure: {}) => {
            return api.post("procedure", addProcedure);
        },
        onSettled: () => {
            queryClient.invalidateQueries("procedures");
        },
    });
    
    const addProcedure = () => {
        mutation.mutate(values);
        handleReset();
    };

    const closeAlert = () => {
        mutation.reset();
    };

    return (
        <div>
            {mutation.isError && <Alert severity="error" onClose={closeAlert}>El registro no fue agregado!</Alert>}
            {mutation.isSuccess && <Alert severity="success" onClose={closeAlert}>El registro fue agregado!</Alert>}

            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
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
                            <InputAdornment position="start">
                                RD$
                            </InputAdornment>
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
                            <InputAdornment position="start">
                                RD$
                            </InputAdornment>
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
                            <InputAdornment position="start">
                                RD$
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <div className="modal-footer">
                <button className="cancel" onClick={handleReset}>
                    Clean Form
                </button>
                <button className="save" disabled={existSomeError} onClick={addProcedure}>
                    <Check
                        fontSize="small"
                        sx={{ padding: "0px", color: "#fff" }}
                    />{" "}
                    <span>Guardar Cambios</span>
                </button>
            </div>
        </div>
    );
};
