import { useRouter } from "next/router";
import React from "react";

// TODO: Dalo by sa viac pohrat s vizualom.
function BoardPage(props) {
  const router = useRouter();

  console.log(router.query);
  return <>Hello from board</>;
}

export default BoardPage;
