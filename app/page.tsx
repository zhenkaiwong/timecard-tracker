import Date from "@/components/input/Date";
import Time from "@/components/input/Time";
import FlexBox from "@/components/layout/FlexBox";
import PageContainer from "@/components/layout/PageContainer";
import { Box, Button, TextField } from "@mui/material";

export default function Home() {
  return (
    <PageContainer title="Timecard App">
      <TimecardPanel />
    </PageContainer>
  );
}

function TimecardPanel() {
  // TODO:
  // - Start time (need checker)
  // - End time (need checker)
  return (
    <FlexBox>
      <FlexBox direction="row">
        <Date sx={{ flex: 1 }} />
        <Time label="Start" sx={{ flex: 1 }} />
        <Time label="End" sx={{ flex: 1 }} />
      </FlexBox>
      <FlexBox direction="row">
        <TextField
          label="Note"
          variant="outlined"
          sx={{ flex: 1 }}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <Button variant="contained">Register</Button>
      </FlexBox>
    </FlexBox>
  );
}
