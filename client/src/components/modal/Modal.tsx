import * as React from "react";
import { Box, Modal, Button } from "@mui/material";
import Check from "@mui/icons-material/Check";

import { ChildModal } from "./ChildModal";
import { ModalItem } from "./Modal-item";
import { IProcedure } from "../../models";
import { closeModal, style } from "./style.json";
import "./Modal.style.scss";

export const ModalComponent = ({ data }: any) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className="button" onClick={handleOpen}>
                {data.length === 0 ? "Agregar Procedimientos" : "Editar Procedimientos"}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, height: 456, width: 1041 }}>
                    <div className="modal-header">
                        <span className="Modificar-Cliente">Procedimientos</span>
                        <ChildModal />
                    </div>
                    <div className="modal-body">
                        {data.map((item: IProcedure) => {
                            return <ModalItem key={item._id} {...item} />;
                        })}
                    </div>
                    <Button sx={closeModal} onClick={handleClose}>
                        X
                    </Button>
                    <div className="modal-footer">
                        <button className="cancel" onClick={handleClose}>Cancelar</button>
                        <button className="save">
                            <Check fontSize="small" onClick={handleClose} sx={{ padding: "0px", color: '#fff' }} />{" "}
                            <span>Guardar Cambios</span>
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};
