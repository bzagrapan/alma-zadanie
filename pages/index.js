import React, { useState } from "react";
import { axiosInstance } from "../services/Axios";
import Board from "../components/Board/Board";
import AddBoard from "../components/AddBoard/AddBoard";
import { useRouter } from "next/router";

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
Dalo by sa to spravit zavolanim spravnej API a ulozenim dat na BE casti.  */
function BoardsPage({ boards }) {
  const [currentBoards, setCurrentBoards] = useState(boards);

  const router = useRouter();

  const handleNavigation = (data) => {
    router.push(
      {
        pathname: "/board",
        query: data,
      },
      "/board"
    );
  };

  return (
    <div>
      <h1 className="header">Boards page</h1>
      <div className="boards-wrapper">
        {currentBoards.map((item) => {
          return (
            <div key={item.id} onClick={() => handleNavigation(item)}>
              <Board name={item.name} />
            </div>
          );
        })}
        <AddBoard
          handleAddBoard={(newBoard) =>
            setCurrentBoards([...currentBoards, newBoard])
          }
        />
      </div>
    </div>
  );
}

export default BoardsPage;
