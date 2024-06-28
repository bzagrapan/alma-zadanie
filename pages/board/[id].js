import React from "react";
import { axiosInstance } from "../../services/Axios";

//Get boards data on the server side.
export const getServerSideProps = async (context) => {
  //return this object in case of error
  const errorProps = { props: { board: {} } };

  try {
    const { query } = context;
    //This uri would change dynamically depending on it's environment. For the testing purposes, I left it hardcoded.
    const apiUrl = `http://localhost:3000/api/boardDetail/${query.id}`;
    const res = await axiosInstance.get(apiUrl, query.id);

    if (res.status !== 200) {
      // If error occurs, log it
      console.error("Error fetching boards data:", res.statusText);
      return errorProps;
    }

    const board = res.data.data;
    return {
      props: { board: board ? board : {} },
    };
  } catch (error) {
    console.log(error);
    return errorProps;
  }
};

function BoardPage(props) {
  console.log(props.board);
  return <>Hello from board</>;
}

export default BoardPage;
