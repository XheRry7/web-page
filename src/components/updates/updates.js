import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import Link from "@material-ui/core/Link";
import styles from "./styles.module.css";

const data = [
  {
    name: "Local Government Finance",
    description:
      "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales",
    published: "Published :",
    date: "jan 2, 2020",
    status: "Updated",
  },
  {
    name: "Transportation Network Carrier Maps",
    published: "Published :",
    date: "jan 2, 2020",
    status: "New",
  },
  {
    name: "BEA- Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23  Government Finance",
    description:
      "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales",
    published: "Published :",
    date: "Dec 16, 2019",
    status: "Updated",
  },
  {
    name: "Budget Development",
    published: "Published :",
    date: "Dec 16, 2019",
    status: "New ",
  },
  {
    name: "November 2019 General Fund Revenue Digest",
    published: "Published :",
    date: "Dec 16, 2019",
    status: "New ",
  },
];

const events = [
  {
    date: "NOV 22 ",
    status: "Updated",
    title: "Board of Economic Advisors Meeting",
    location: "Room 417,Bowers Conference Room,Rembert Dennis Bulding",
    time: "1:30 pm",
    phoneNumber: "(803) 734-2265",
  },
  {
    date: "NOV 23 ",
    status: "Canceled",
    title: "Board of Economic Advisors Meeting",
    location: "Room 417,Bowers Conference Room,Rembert Dennis Bulding",
    time: "1:30 pm",
    phoneNumber: "(803) 734-2265",
  },
  {
    date: "NOV 25 ",
    title: "Board of Economic Advisors Meeting",
    location: "Room 417,Bowers Conference Room,Rembert Dennis Bulding",
    time: "1:30 pm",
    phoneNumber: "(803) 734-2265",
  },
  {
    date: "NOV 28 ",
    title: "Board of Economic Advisors Meeting",
    location: "Room 417,Bowers Conference Room,Rembert Dennis Bulding",
    time: "1:30 pm",
    phoneNumber: "(803) 734-2265",
  },
];

export default function Updates() {
  const topHandler =()=>{
    window.scrollTo(0,0);
  }
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6} className={styles.updates}>
          <Typography variant="h6">Recent Updates</Typography>
          {data.map((events) => {
            return (
              <>
                <div className={styles.third}>
                  <Link>{events?.name}</Link>
                  <Typography>{events?.description}</Typography>
                  <Typography> {events?.published}</Typography>
                  <Typography>{events.date}</Typography>
                  <Typography>{events?.status}</Typography>
                </div>
              </>
            );
          })}
          <Typography variant="contained" className={styles.btn3}>
            View More
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6">Calender of Events</Typography>
          {events.map((e) => {
            return (
              <div className={styles.main}>
                <div className={styles.date}>
                  <Typography>{e?.date}</Typography>
                </div>
                <div className={styles.third}>
                  {e?.status && e?.status === "Updated" && (
                    <span className={styles.success}>{e?.status}</span>
                  )}
                  {e?.status && e?.status === "Canceled" && (
                    <span className={styles.cancelled}>{e?.status}</span>
                  )}
                  <Typography className={styles.title}>{e?.title}</Typography>
                  <Typography className={styles.location}>
                    <LocationOnOutlinedIcon />
                    {e?.location}
                  </Typography>
                  <Typography className={styles.time}>
                    <QueryBuilderOutlinedIcon color="8c6810" />
                    {e?.time}
                  </Typography>
                  <Typography className={styles.phone}>
                    <PermContactCalendarOutlinedIcon />
                    {e.phoneNumber}
                  </Typography>
                </div>
              </div>
            );
          })}
          <Typography variant="contained" className={styles.btn3}>
            View All Events
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={styles.updateContainer}>
      <Grid container spacing={1}>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
      </Grid>
      <Typography className={styles.btn2}>Back to Top <ExpandLessIcon className={styles.icon} onClick={topHandler} /> </Typography>
    </div>
  );
}
