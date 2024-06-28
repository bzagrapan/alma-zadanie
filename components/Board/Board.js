import React from "react";
import { Card, CardActionArea } from "@mui/material";
import styles from "./Board.module.css";

// TODO: Dalo by sa viac pohrat s vizualom.
function Board({ name, id }) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardActionArea onClick={() => console.log(id)}>
        <div className={styles.boardBasicWrapper}>{name}</div>
      </CardActionArea>
    </Card>
  );
}

export default Board;
