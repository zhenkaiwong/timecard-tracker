import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  children?: React.ReactNode;
  title: string;
};

export default function PageContainer(props: Props) {
  return (
    <Box component={"section"}>
      <Typography variant="h1">{props.title}</Typography>
      {props.children}
    </Box>
  );
}
