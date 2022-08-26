import React, { ChangeEvent } from "react";
import "./style.scss";

import { Pagination as Paginate, Stack } from "@mui/material";

interface Props {
  page: number;
  totalPage: any;
  paginate: (value: number) => void;
}

export const Pagination = ({ page, totalPage, paginate }: Props) => {
  return (
    <Stack className="Pagination" sx={{ mt: { lg: "114px", xs: "70px" } }} >
      <Paginate
        shape="rounded"
        defaultPage={page}
        count={totalPage}
        onChange={paginate}
      />
    </Stack>
  );
};