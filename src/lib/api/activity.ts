import { GET_ACTIVITY_LIST_URL } from "@/const/endPoints";
import { get } from "./";
import { ActivityListResponse } from "@/@types/activity/list";

export async function getActivityList(): Promise<ActivityListResponse> {
  try {
    const data = await get<ActivityListResponse>(GET_ACTIVITY_LIST_URL);
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to get activity list data.");
  }
}
