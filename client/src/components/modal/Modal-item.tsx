import { useMutation, useQueryClient } from 'react-query';
import { Icon } from "@mui/material";
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

    const removeItem = () => mutation.mutate();

    return (
        <div className="form" key={_id}>
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
