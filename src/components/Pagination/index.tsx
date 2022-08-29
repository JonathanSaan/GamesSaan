import { Pagination as Paginate } from "@mui/material";

import { ThePagination } from "./styles";

interface Props {
  page: number;
  totalPage: any;
  paginate: (event: any, value: number) => void;
}

export const Pagination = ({ page, totalPage, paginate }: Props) => {
  return (
    <ThePagination>
      <Paginate
        size="small"
        color="primary"
        shape="rounded"
        defaultPage={page}
        count={totalPage}
        onChange={paginate}
      />
    </ThePagination>
  );
};