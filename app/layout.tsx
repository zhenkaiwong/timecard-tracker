import type { Metadata } from "next";
import "./globals.css";
import { Stack } from "@mui/material";
import NavButton from "@/components/nav/NavButton";
import AppContainer from "@/components/layout/AppContainer";

export const metadata: Metadata = {
  title: "Timecards",
  description: "Easier way to manage your PSS timecards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Stack spacing={2} component={"nav"} direction={"row"}>
            <NavButton href="/">Home</NavButton>
            <NavButton href="/timecards">Timecards</NavButton>
            <NavButton href="/settings">Settings</NavButton>
          </Stack>
        </header>
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
