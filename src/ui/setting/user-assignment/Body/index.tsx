"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Fields from "./Fields";
import Reviewers from "./Reviewers";

import { getCategoryDetail } from "@/lib/api/category";

import { IdName } from "@/@types/base";
import { CategoryDetailData } from "@/@types/category/view";

interface Props {
  list: IdName[];
}

export default function Body({ list }: Props) {
  const [selectedField, setSelectedField] = useState<string>();
  const [currentFieldData, setCurrentFieldData] =
    useState<CategoryDetailData>();
  const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedField && list) {
      setSelectedField(list[0].id);
    }
  }, [list]);

  useEffect(() => {
    if (selectedField) {
      setCurrentFieldData(undefined);
      setIsLoadingDetail(true);
      getCategoryDetail(selectedField).then((res) => {
        setCurrentFieldData(res.rows);
        setIsLoadingDetail(false);
      });
    }
  }, [selectedField]);

  useEffect(() => {
    console.log("currentFieldData", currentFieldData?.reviewers);
  }, [currentFieldData]);

  const onSelectField = (field: string) => {
    setSelectedField(field);
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ minHeight: 700, height: 700 }}>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Fields
            fields={list}
            selectedField={selectedField}
            onSelectField={onSelectField}
          />
        </Grid>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Reviewers
            data={currentFieldData?.reviewers}
            isLoading={isLoadingDetail}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
