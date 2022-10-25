import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { Box } from "@material-ui/core";
import logo from "../../Assets/RFA Logo Final.png";
import styles from "./style.module.css";
import { Close } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import DropDown from "../dropdown/dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100%",
    background: "#fff",
    zIndex: "99999",
    top: "0",
    borderBottom: "6px solid #1B3A61",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  appBar: {
    background: "#fff",
  },
  imageBox: {
    maxHeight: "85px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  sideButton: {
    backgroundColor: "blue",
  },
  grow: {
    flexGrow: 1,
  },
}));

const Header = ({ state, setState }) => {
  const classes = useStyles();
  const navItems = ["About Us", "Events", "Boards & Committees"];

  const [showDropDown, setShowDropDown] = useState(false);

  const dropDown = () => {
    if(!showDropDown){
    setShowDropDown(true);
    }
    else{
      setShowDropDown(false);
    }
  };

  const drawerHandler = () => {
    setState(true);
  };

  const closeHandler = () => {
    setState(false);
  };

  return (
    <Typography variant="div" className={styles.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={styles.toolbar}>
          {!state ? (
            <>
              <Typography variant="div" className={styles.menu}>
                <MenuIcon className={styles.icon} onClick={drawerHandler} />
                <span className={styles.span}>MENU</span>
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="div" className={styles.menu}>
                <Close className={styles.icon} onClick={closeHandler} />
                <span className={styles.span}>Close</span>
              </Typography>
            </>
          )}

          <Box
            component="img"
            sx={{
              height: 45,
              width: 50,
            }}
            alt="SACFRA Logo"
            src={logo}
            className={classes.imageBox}
          />

          <Typography variant="inherit" className={classes.roots}>
            <Typography variant="inherit" className={styles.title2}>
              South Carolina <br />
              Revenue and Fiscal Affairs Office
            </Typography>
            <br />
            <Typography variant="inherit" className={styles.title3}>
              Transforming data into solutions for South Carolina
            </Typography>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  className={styles.btn}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </div>
          <div className={!showDropDown ? styles.search : styles.search2}>
            <SearchOutlined onClick={dropDown} />
          </div>
        </Toolbar>
      </AppBar>
      {state && <DropDown />}
      {showDropDown && (
        <div className={styles.searchDrop}>
          <input type="text" placeholder="Enter search Item" />
          <button className={styles.dropBtn}>Search</button>
        </div>
      )}
    </Typography>
  );
};

export default Header;
