import React from "react";
import { Box, Button, Modal } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { closeModal, style } from "./style.json";
import { Form } from "../form";

export const ChildModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
			setOpen(true);
	};
	const handleClose = () => {
			setOpen(false);
	};

  return (
    <React.Fragment>
			<div className="modal-child-header" onClick={handleOpen}>
				<AddIcon sx={{
					fontSize: 25,
					color: "rgb(0, 143, 97)",
				}}/> 
				<p className="text-open-modal" >Añadir procedimiento</p>
			</div>
      <Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="parent-modal-title"
					aria-describedby="parent-modal-description"
			>
					<Box sx={{ ...style, height: 400, width: 900 }}>
							<h2 id="parent-modal-title">Add procedure</h2>
							<Form />
					<Button sx={closeModal} onClick={handleClose}>X</Button>
					</Box>
			</Modal>
    </React.Fragment>
  );
}