import { Check } from "@mui/icons-material";
import { Alert, Box, InputAdornment, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { api } from "../../config";

import { useFields } from "../../hooks";
import { defaultFieldValues } from "./default-input-data";
import { FormInputs } from "./Form-inputs";

export const Form = () => {
    const validationFields = useFields(defaultFieldValues);

    const handleReset = () => {
        validationFields.reset();
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
        mutation.mutate(validationFields.values);
        handleReset();
    };

    const closeAlert = () => {
        mutation.reset();
    };

    return (
        <div>
            {mutation.isError && (
                <Alert severity="error" onClose={closeAlert}>
                    El registro no fue agregado!
                </Alert>
            )}
            {mutation.isSuccess && (
                <Alert severity="success" onClose={closeAlert}>
                    El registro fue agregado!
                </Alert>
            )}

            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <FormInputs {...validationFields} />
            </Box>
            <div className="modal-footer">
                <button className="cancel" onClick={handleReset}>
                    Clean Form
                </button>
                <button
                    className="save"
                    disabled={validationFields.existSomeError}
                    onClick={addProcedure}
                >
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
