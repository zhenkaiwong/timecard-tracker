"use client";

import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

type Props = {
  sx?: SxProps<Theme>;
  name: string;
};

export default function Date(props: Props) {
  return (
    <DatePicker
      name={props.name}
      defaultValue={dayjs()}
      label="Today"
      sx={props.sx}
    />
  );
}
