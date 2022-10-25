import { Typography } from "@material-ui/core";
import React from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import styles from "./styles.module.css";

const firstRowData = [
  {
    name: "Overview and history of the South Carolina State Budget",
  },
  {
    name: "Employer contribution Trends",
  },
  {
    name: "Appropriation Bills and Acts ",
  },
];

const secondRowData = [
  {
    name: "Overview and history of the South Carolina State Budget",
  },
  {
    name: "Employer contribution Trends -June 4,2019",
  },
  {
    name: "Executive Budget Office State Agency Budget Plans(Requests)",
  },
];

export default function Services() {
  function FormRow() {
    return (
      <>
        <React.Fragment>
          <Grid item md={4} xs={12}>
            {firstRowData.map((e) => {
              return <Link className={styles.second}>{e.name}</Link>;
            })}
          </Grid>
          <Grid item md={4} xs={12}>
            {secondRowData.map((e) => {
              return <Link className={styles.second}>{e.name}</Link>;
            })}
          </Grid>
          <Grid item md={4} xs={12}>
            {secondRowData.map((e) => {
              return <Link className={styles.second}>{e.name}</Link>;
            })}
          </Grid>
        </React.Fragment>
      </>
    );
  }

  return (
    <div className={styles.servicesContainer}>
      <Typography variant="h3">Popular Services and links</Typography>
      <Grid container item xs={12}>
        <FormRow />
      </Grid>
    </div>
  );
}
