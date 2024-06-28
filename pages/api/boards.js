export const getBoards = async () => {
  return { data: JSON.stringify("Hello from BE") };
};

//This API function is available at /api/boards
export default async function handler(req, res) {
  const boards = await getBoards();
  res.status(200).json(boards);
}
