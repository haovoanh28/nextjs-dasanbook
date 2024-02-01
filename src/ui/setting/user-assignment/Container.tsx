import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Body from "./Body";

import { getCategoryList } from "@/lib/api/category";

export default async function Container() {
  const categoryList = await getCategoryList();

  return <Body list={categoryList.rows} />;
}
