"use client";

import PageHeader from "@/components/PageHeader";
import { BarChart } from "@mui/icons-material";

export default function DashboardPageHeader() {
  const onRefresh = () => {};
  return (
    <PageHeader
      pageTitle="대시보드"
      pageIcon={BarChart}
      onRefresh={onRefresh}
    />
  );
}
