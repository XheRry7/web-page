import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Search } from "@material-ui/icons";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h5" className={styles.text}>
        Providing insightful research, analysis, and resources to facilitate
        informed policy decisions and administration of services
      </Typography>
      <div className={styles.main}>
        <input
          type="text"
          placeholder="Search rfa.sc.gov"
          className={styles.input}
        ></input>
        <Button variant="contained" padding="20px" className={styles.btn}>
          Search
          <Search />
        </Button>
      </div>
    </div>
  );
};
export default About;
