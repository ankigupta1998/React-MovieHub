// import React from 'react';
// import Pagination from "@material-ui/lab/Pagination";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        color:"white"
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={numOfPages}
          color="primary"
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
      </Stack>
    </div>
  );
}
