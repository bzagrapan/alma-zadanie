import React from "react";
import { Card } from "@mui/material";
import styles from "./Board.module.css";

// TODO: Dalo by sa viac pohrat s vizualom.
function Board({ name, id }) {
  return (
    <Card variant="outlined" sx={{ minWidth: 200 }}>
      <div className={styles.boardBasicWrapper}>{name}</div>
    </Card>
  );
}

export default Board;
