import Box from "@mui/material/Box";
import Item from "./Item";

import { MailTemplateListItem } from "@/@types/mail-template/list";

interface Props {
  list: MailTemplateListItem[];
}

export default function List({ list }: Props) {
  return (
    <Box>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Box>
  );
}
