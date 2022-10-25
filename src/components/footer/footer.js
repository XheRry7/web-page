import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import styles from "./styles.module.css";
import FooterImage from "../../Assets/Group 262.png";

const data1 = [
  {
    name: "Privacy Statement",
  },
  {
    name: "FOIA",
  },
  {
    name: "Disclosures and Reporting",
  },
  {
    name: "report Fraud",
  },
  {
    name: "Accessibility",
  },
  {
    name: " Contact Us",
  },
];

const contactUs = [
  {
    name: "Main Office",
    address: "1000 Assembly St, Rembert Dennis Building, Suite 421",
    country: "Columbia, SC 29201",
  },
  {
    name: "Geodetic Survey Section",
    address: "5 Geology Rd",
    country: "Columbia, SC 29212",
  },
  {
    name: "Health and demographics division",
    address: "1000 Assembly St, Rembert Dennis Building, Suite 240",
    country: "Columbia, SC 29201",
  },
];

export default function Footer() {
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Typography className={styles.first}>South Carolina </Typography>
          <Typography className={styles.firsts}>
            Revenue and Fiscal Affairs Office
          </Typography>
          <CardMedia
            className={styles.img}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            width="30%"
            image={FooterImage}
          />
        </Grid>
        <Grid item xs={4}>
          {data1.map((e) => {
            return <Typography className={styles.second}>{e.name}</Typography>;
          })}
        </Grid>
        <Grid item xs={4}>
          {contactUs.map((e) => {
            return (
              <div className={styles.third}>
                <Typography>{e.name}</Typography>
                <Typography>{e.address}</Typography>
                <Typography>{e.country}</Typography>
              </div>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.containers}>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
      </div>
    </div>
  );
}
