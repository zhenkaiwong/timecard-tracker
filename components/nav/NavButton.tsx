import { Typography } from "@mui/material";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavButton(props: Props) {
  return (
    <Typography variant="body1">
      <Link href={props.href}>{props.children}</Link>
    </Typography>
  );
}
