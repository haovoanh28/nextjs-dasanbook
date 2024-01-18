"use client";

// import { useRouter } from "next/router";
import { unstable_noStore as noStore } from "next/cache";
import { usePathname, useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Description } from "@mui/icons-material";

interface Props {
  test?: () => void;
}

export default function DetailPageHeader({ test }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  console.log("pathname ==> ", pathname);
  const onRefresh = () => {
    noStore();
    router.replace(pathname);
  };

  return (
    <PageHeader
      pageTitle="Detail Page"
      pageIcon={Description}
      onRefresh={onRefresh}
    />
  );
}
