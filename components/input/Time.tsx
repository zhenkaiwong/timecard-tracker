"use client";

import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers";

type Props = {
  label: string;
  sx?: SxProps<Theme>;
};

export default function Time(props: Props) {
  return <TimeField label={props.label} sx={props.sx} />;
}
