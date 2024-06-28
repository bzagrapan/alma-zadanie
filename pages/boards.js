import React from "react";
import { axiosInstance } from "../services/Axios";
import Board from "../components/Board/Board";

//Get boards data on the server side.
export const getServerSideProps = async () => {
  //return this object in case of error
  const errorProps = { props: { boards: [] } };

  try {
    //This uri would change dynamically depending on it's environment. For the testing purposes, I left it hardcoded.
    const apiUrl = "http://localhost:3000/api/boards";
    const res = await axiosInstance.get(apiUrl);

    if (res.status !== 200) {
      // If error occurs, log it
      console.error("Error fetching boards data:", res.statusText);
      return errorProps;
    }

    const boards = res.data.data;
    console.log("serverSide", boards);
    return {
      props: { boards },
    };
  } catch (error) {
    console.log(error);
    return errorProps;
  }
};

/* TODO: Pre zjednodusenie riesenia sa novovytvorene boardy neukladaju do json suboru(fake db).
Tym padom sa po refreshi vyrendruju len default data. 
Dalo by sa to spravit jednoducho zavolanim spravnej API a ulozenim dat. Takisto by potom tato page
nemapovala priamo props.boards, ale vytvoril by som state, kde by sa drzali vzdy
up to date data.  */
function BoardsPage({ boards }) {
  console.log(boards);
  return (
    <div>
      <h1 className="header">Boards page</h1>
      <div className="boards-wrapper">
        {boards.map((item) => {
          return <Board key={item.id} name={item.name} id={item.id} />;
        })}
      </div>
    </div>
  );
}

export default BoardsPage;
