import { GET_EMAIL_LIST_URL } from "@/const/endPoints";
import { get } from ".";
import { MailTemplateListResponse } from "@/@types/mail-template/list";

export async function getMailTemplateList(): Promise<MailTemplateListResponse> {
  try {
    const data = await get<MailTemplateListResponse>(GET_EMAIL_LIST_URL);
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to get mail template list data.");
  }
}
