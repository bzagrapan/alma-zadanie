import { boardsDb } from "../../db";

const getBoards = async () => {
  try {
    return { data: boardsDb.list() };
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
};

//This API function is available at /api/boards
export default async function handler(req, res) {
  const boards = await getBoards();
  res.status(200).json(boards);
}
