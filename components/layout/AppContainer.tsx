"use client";

import { Container } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppContainer(props: Props) {
  return (
    <Container component={"section"}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {props.children}
      </LocalizationProvider>
    </Container>
  );
}
