import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import UserInformation from "@/components/UserInformation";

import { faker } from "@faker-js/faker";
import { getActivityList } from "@/lib/api/activity";

interface Activity {
  id: string;
  date: string;
  time: string;
  userName: string;
  type: string;
  title: string;
}

const ACTIVITIES_DATA: Activity[] = Array.from({ length: 5 }).map(
  (_, index) => ({
    id: faker.string.uuid(),
    date: faker.date.recent().toLocaleDateString(),
    time: faker.date.recent().toLocaleTimeString(),
    userName: faker.person.firstName() + " " + faker.person.lastName(),
    type: "Update",
    title: faker.lorem.sentence(),
  })
);

export default async function Activities() {
  const activityList = await getActivityList();

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        최신 활동
      </Typography>

      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineOppositeContent sx={{ display: "none" }} />
        {activityList.rows.map((activity) => (
          <TimelineItem key={activity.id}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="text.secondary">
                {activity.created_on}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <UserInformation
                mainInfo={activity.creator_name}
                subInfo={activity.data.status}
              />
              <Typography variant="body2" sx={{ my: 1 }}>
                {activity.title}
              </Typography>
              <Box>
                <Typography>상태 변경: Backlog 에서 Analyst</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
