import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import dataResearchIcon from "../../Assets/Data-Research-Icon.svg";
import geographyIcon from "../../Assets/Geography-Icon.svg";
import programsIcon from "../../Assets/Programs-Icon.svg";
import lesgislativeIcon from "../../Assets/Legislative-Icon.svg";
import styles from "./styles.module.css";

const Data = [
  {
    image: dataResearchIcon,
    description: "DATA & RESEARCH",
  },
  {
    image: geographyIcon,
    description: "Geography & Mapping",
  },
  {
    image: programsIcon,
    description: "Programs & Services",
  },
  {
    image: lesgislativeIcon,
    description: "Legislative Fiscal Impacts",
  },
];

export default function Events() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        {Data.map((e) => {
          return (
            <div className={styles.card}>
              <CardMedia
                className={styles.img}
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={e.image}
                title={e.title}
              />
              <Typography
                gutterBottom
                variant="h5"
                className={styles.description}
              >
                {e.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
