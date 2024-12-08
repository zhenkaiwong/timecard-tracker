# Time card tracker

## Problems

1. **Lack of Historical Records**: My current time card system in Excel does not provide a way to preserve historical data. Once the sheet is updated, older entries are lost or become difficult to retrieve for future reference.
2. **Insufficient Detail in Time Tracking**: The current Excel sheet lacks the ability to present detailed insights. For example, I cannot easily differentiate time spent on ticket-related tasks versus non-ticket activities, such as administrative or ad-hoc tasks, without manual effort.
3. **Manual Time Conversion**: Excel does not automatically convert time durations into decimal hours (e.g., 15 minutes to 0.25 hours). This makes calculations cumbersome and prone to errors.
4. **No Weekly Work Hours Overview**: The current system does not provide a clear view of how many hours I have worked in a given week or how many hours remain to meet my weekly target.
5. **No Immediate Logging Reminders**: When a Level 1 (L1) task is recorded, there is no mechanism to remind me to log the corresponding time card entry immediately. This leads to delayed submissions and gaps in time tracking.
6. **Manual time card insertion**: The current system does not provide an easy way to copy the time card detail and time to record. Eg: I need to `ctrl + c` and `ctrl + v` for each entry in my current time card system

## Tech stack

<p>
  <a href="https://nextjs.org/">NextJS</a>
</p>
<p>
  <a href="https://react.dev/">ReactJS</a>
</p>
<p>
  <a href="https://www.typescriptlang.org/">TypeScript</a>
</p>
<p>
  <a href="https://mui.com/">Meterial UI</a>
</p>

## To run local

Install dependencies using following command:

```bash
npm install
```

Run the development server using following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
