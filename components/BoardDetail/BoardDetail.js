import React from "react";
import { Card } from "@mui/material";
import styles from "./BoardDetail.module.css";

//TODO: Do buducna by bol fajn napad urobit jednotlive list itemy draggable, aby sa dali presuvat medzi stlpcami.
function BoardDetail({ data }) {
  console.log(data);
  return (
    <div className={styles.boardDetailListWrapper}>
      {data.lists.map((list) => {
        return (
          <Card key={list.id}>
            <div
              className={styles.boardDetailListWrapper}
              style={{ flexDirection: "column" }}
            >
              <h3>{list.name}</h3>
              {list.items.map((item) => {
                return (
                  <Card key={item.id} sx={{ width: "100%" }}>
                    <div className={styles.itemWrapper}>{item.name}</div>
                  </Card>
                );
              })}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default BoardDetail;
