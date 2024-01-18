"use client";

import { useRouter } from "next/navigation";
import BaseButton from "@/components/BaseButton";
import { SUBMISSION_URL } from "@/const/url";

export default function TempComp() {
  const router = useRouter();

  return (
    <BaseButton
      onClick={() => {
        router.push(`${SUBMISSION_URL}/1`);
      }}
    >
      Go to detail
    </BaseButton>
  );
}
