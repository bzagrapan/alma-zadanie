import React, { useState } from "react";
import { Card } from "@mui/material";
import styles from "./BoardDetail.module.css";
import AddItem from "../AddItem/AddItem";
import _ from "lodash";

//TODO: Do buducna by bol fajn napad urobit jednotlive list itemy draggable, aby sa dali presuvat medzi stlpcami.
function BoardDetail({ data }) {
  const [board, setBoard] = useState(data);

  // TODO: Pre zjednodusenie vypracovania ukladam nove itemy a listy len do state-u. Neukladam ich do suboru, pretoze
  // by to vyzadovalo viac casu. Pri ukladani novych boardov som ukazal, ako by vyzeralo realne funkcne ukladanie.
  // Nieco podobne by sa dalo urobit aj tu.
  const addItemIntoList = (listId, item) => {
    let newBoard = _.cloneDeep(board);
    let list = newBoard.lists.find((list) => {
      return list.id === listId;
    });

    list.items.push(item);

    setBoard(newBoard);
  };

  const addNewList = (list) => {
    let newBoard = _.cloneDeep(board);
    newBoard.lists.push(list);
    setBoard(newBoard);
  };

  return (
    <div className={styles.boardDetailListWrapper}>
      {board.lists.map((list) => {
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
              <AddItem
                handleAddItem={(item) => addItemIntoList(list.id, item)}
                label="Add new item"
                type="item"
              />
            </div>
          </Card>
        );
      })}
      <div>
        <AddItem
          label="Add new list"
          type="list"
          handleAddItem={(item) => addNewList(item)}
        />
      </div>
    </div>
  );
}

export default BoardDetail;
