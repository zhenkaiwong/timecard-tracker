import { Box } from "@mui/material";
import React from "react";
import { error } from "console";

type Direction = "row" | "column";

type Props = {
  direction?: Direction;
  gap?: number;
  children?: React.ReactNode;
};

type FlexFormProps = Props & {
  useAsForm?: boolean;
  action?: (formData: FormData) => void;
};

function getFlexBoxStyle(direction?: Direction, gap?: number) {
  return {
    display: "flex",
    flexDirection: direction ?? "column",
    gap: gap ?? 1,
  };
}

export default function FlexBox(props: FlexFormProps) {
  if (props.useAsForm) {
    if (!props.action) {
      throw error(
        "It is not possible to use flex box as form without form action supplied"
      );
    }
    return <FlexForm {...props} />;
  }

  return <FlexDiv {...props} />;
}

function FlexForm(props: FlexFormProps) {
  const style = getFlexBoxStyle(props.direction, props.gap);
  return (
    <Box sx={style} component={"form"} action={props.action}>
      {props.children}
    </Box>
  );
}

function FlexDiv(props: Props) {
  const style = getFlexBoxStyle(props.direction, props.gap);
  return <Box sx={style}>{props.children}</Box>;
}
