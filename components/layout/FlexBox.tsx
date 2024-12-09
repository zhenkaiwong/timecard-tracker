import { Box } from "@mui/material";
import React from "react";

type Props = {
  direction?: "row" | "column";
  gap?: number;
  children?: React.ReactNode;
};
export default function FlexBox(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: props.direction ?? "column",
        gap: props.gap ?? 1,
      }}
    >
      {props.children}
    </Box>
  );
}
