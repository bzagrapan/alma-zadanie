import React from "react";
import { axiosInstance } from "../services/Axios";

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

function BoardsPage(props) {
  // useEffect(() => {
  //   axiosInstance
  //     .get("/api/boards")
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  console.log(props);
  return (
    <div>
      <h1>Boards</h1>
    </div>
  );
}

export default BoardsPage;
