import { unstable_noStore as noStore } from "next/cache";
import {
  GET_MANUSCRIPT_LIST_URL,
  GET_MANUSCRIPT_VIEW_URL,
} from "@/const/endPoints";
import { ManuscriptListResponse } from "@/@types/manuscripts/list";
import { ManuscriptViewResponse } from "@/@types/manuscripts/view";

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

export async function getManuscriptDetail(
  id: number | string
): Promise<ManuscriptViewResponse> {
  noStore();

  try {
    const data = (await fetch(`${GET_MANUSCRIPT_VIEW_URL}/?id=${id}`).then(
      (res) => res.json()
    )) as ManuscriptViewResponse;
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch manuscript data.");
  }
}
