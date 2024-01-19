"use client";

// import { useRouter } from "next/router";
import { unstable_noStore as noStore } from "next/cache";
import { usePathname, useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Description } from "@mui/icons-material";

interface Props {}

export default function DetailPageHeader({}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onRefresh = () => {
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
