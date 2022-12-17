import { useMutation, useQueryClient } from 'react-query';
import { Alert, Icon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ModalItemGroup } from "./Modal-item-group";
import { IProcedure } from "../../models";
import { http } from "../../services";

export const ModalItem = ({
    _id,
    procedure,
    code,
    authorized,
    reclaim,
    difference,
}: IProcedure) => {
	const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (removeProcedure) => {
            return http.remove("procedure", _id);
        },
				onSettled: () => {
					queryClient.invalidateQueries('procedures')
				}

    });

    console.log(mutation.isSuccess)

    const removeItem = () => mutation.mutate();

    return (
        <div className="form" key={_id}>
            {mutation.isError && <Alert severity="error" >El registro no fue agregado!</Alert>}
            {mutation.isSuccess && <Alert severity="success">El registro fue eliminar!</Alert>}
            <div className="form__container">
                <Icon className="form__icon" onClick={removeItem}>
                    <DeleteIcon color="disabled" />
                </Icon>
                <ModalItemGroup value={procedure} title="Procedimiento 01" />
                <ModalItemGroup value={code} title="Código" />
                <ModalItemGroup value={reclaim} title="Reclamado RD$" />
                <ModalItemGroup value={difference} title="Diferencia RD$" />
                <ModalItemGroup value={authorized} title="Autorizado RD$" />
            </div>
        </div>
    );
};
