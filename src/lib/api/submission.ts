import { unstable_noStore as noStore } from "next/cache";
import { GET_MANUSCRIPT_LIST_URL } from "@/const/endPoints";
import { ManuscriptListResponse } from "@/@types/manuscripts/list";

export async function fetchSubmissionList() {
  noStore();

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    return await res.json();
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch submission data.");
  }
}

export async function getManuscriptList(): Promise<ManuscriptListResponse> {
  noStore();

  try {
    const data = (await fetch(`${GET_MANUSCRIPT_LIST_URL}`).then((res) =>
      res.json()
    )) as ManuscriptListResponse;
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch manuscript data.");
  }
}
