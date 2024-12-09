"use client";

import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers";

type Props = {
  label: string;
  sx?: SxProps<Theme>;
  name: string;
};

export default function Time(props: Props) {
  return <TimeField name={props.name} label={props.label} sx={props.sx} />;
}
