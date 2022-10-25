import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import {
  leftSideBar,
  firstData,
  secondData,
  thirdData,
  fourthData,
} from "./dropDowndata";
import styles from "./styles.module.css";

export default function DropDown() {
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item md={3} xs={12} lg={2} className={styles.DropDown}>
          {leftSideBar.map((events) => {
            return (
              <>
                <div className={styles.third}>
                  <Typography>{events?.name}</Typography>
                </div>
              </>
            );
          })}
        </Grid>
        <Grid item md={9} xs={12} lg={10}>
          <Grid container item xs={12} className={styles.gridContainer}>
            <Grid item xs={4}>
              <Typography variant="h6">Data & Research</Typography>
              {firstData.map((e) => {
                return (
                  <>
                    <div className={styles.third}>
                      <Typography>{e?.name}</Typography>
                    </div>
                  </>
                );
              })}
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Geography & Mapping</Typography>
              {secondData.map((e) => {
                return (
                  <>
                    <div className={styles.third}>
                      <Typography>{e?.name}</Typography>
                    </div>
                  </>
                );
              })}
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Programs & Services</Typography>
              {thirdData.map((e) => {
                return (
                  <>
                    <div className={styles.third}>
                      <Typography>{e?.name}</Typography>
                    </div>
                  </>
                );
              })}
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography variant="h6">Legislative Fiscal Impacts</Typography>
              {fourthData.map((e) => {
                return (
                  <>
                    <div className={styles.third}>
                      <Typography>{e?.name}</Typography>
                    </div>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={styles.updateContainer}>
      <Grid container>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
