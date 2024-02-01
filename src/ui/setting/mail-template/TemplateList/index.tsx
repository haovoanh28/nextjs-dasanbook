import { getMailTemplateList } from "@/lib/api/mail-template";
import List from "./List";

export default async function TemplateList() {
  const mailTemplateList = await getMailTemplateList();

  return (
    <>
      <List list={mailTemplateList.rows} />
    </>
  );
}
