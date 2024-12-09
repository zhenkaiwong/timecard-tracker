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

const FORM_NAMES = {
  submitDate: "submitDate",
  startTime: "startTime",
  endTime: "endTime",
  note: "note",
};

async function submitTimecard(formData: FormData) {
  "use server";

  const submitDate = formData.get(FORM_NAMES.submitDate);
  const startTime = formData.get(FORM_NAMES.startTime);
  const endTime = formData.get(FORM_NAMES.endTime);
  const note = formData.get(FORM_NAMES.note);

  console.log({ submitDate, startTime, endTime, note });
}

function TimecardPanel() {
  // TODO:
  // - Start time (need checker)
  // - End time (need checker)
  return (
    <FlexBox useAsForm action={submitTimecard}>
      <FlexBox direction="row">
        <Date name={FORM_NAMES.submitDate} sx={{ flex: 1 }} />
        <Time name={FORM_NAMES.startTime} label="Start" sx={{ flex: 1 }} />
        <Time name={FORM_NAMES.endTime} label="End" sx={{ flex: 1 }} />
      </FlexBox>
      <FlexBox direction="row">
        <TextField
          label="Note"
          variant="outlined"
          name={FORM_NAMES.note}
          sx={{ flex: 1 }}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
