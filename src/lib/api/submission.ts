import { unstable_noStore as noStore } from "next/cache";

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
