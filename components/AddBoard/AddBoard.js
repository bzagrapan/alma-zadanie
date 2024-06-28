import React, { useState } from "react";
import styles from "./AddBoard.module.css";
import { Card, IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { green } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";

// TODO: Dalo by sa viac pohrat s vizualom.
function AddBoard({ handleAddBoard }) {
  const [boardName, setBoardName] = useState("");

  const handleClick = () => {
    const newBoard = { id: uuidv4(), name: boardName, lists: [] };
    boardName && handleAddBoard(newBoard);
  };

  return (
    <Card>
      <div className={styles.AddBoardWrapper}>
        <TextField
          variant="standard"
          label="Add new board"
          onChange={(e) => setBoardName(e.target.value)}
        />
        <IconButton onClick={handleClick} sx={{ color: green[500] }}>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
    </Card>
  );
}

export default AddBoard;
