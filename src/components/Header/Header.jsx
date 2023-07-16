import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { FaTimes, FaVideo } from "react-icons/fa";
import { GiMusicalScore } from "react-icons/gi";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";
import { SiHatenabookmark } from "react-icons/si";
import djs from "../../assests/images/logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Services, Staffs } from "./Navs";
// import { makeStyles } from "@mui/material";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const [isStaff, setIsStaff] = React.useState(false);

  const mousetoggle = () => {
    setOpen(!isOpen);
  };

  const mouseStafftoggle = () => {
    setIsStaff(!isStaff);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      className="bg-blue-950 h-screen"
    >
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        style={{
          cursor: "pointer",
          marginLeft: "50px",
          marginTop: "20px",
          color: "white",
          textAlign: "flex-start",
          fontSize: "larger",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <FaTimes
          style={{
            cursor: "pointer",
            // marginRight: "90px",
            color: "white",
            textAlign: "center",
            fontSize: "larger",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Typography>
      <Divider />
      <List
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            lineHeight: "50px",
          }}
        >
          <ListItem>
            <a
              href="#"
              className="text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              PROFILE
            </a>
          </ListItem>
          <ListItem>
            <div
              className="relative inline-block text-left"
              onMouseEnter={mousetoggle}
              onMouseLeave={mousetoggle}
            >
              <button
                type="button"
                className="text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                SERVICES
              </button>
              {isOpen && (
                <>
                  <Services />
                </>
              )}
            </div>
          </ListItem>

          <ListItem>
            {" "}
            <a
              href="#"
              className="text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              PROJECTS
            </a>
          </ListItem>

          <ListItem>
            <div
              className="relative inline-block text-left"
              onMouseEnter={mouseStafftoggle}
              onMouseLeave={mouseStafftoggle}
            >
              <button
                type="button"
                className=" text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                STAFFS
              </button>
              {isStaff && (
                <>
                  <Staffs />
                </>
              )}
            </div>
          </ListItem>
        </ul>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <Box sx={{ display: "flex" }} className="box-header-div">
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            bgcolor: "white",
            color: "black",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              // aria-label="open drawer"
              aria-label="menu"
              edge="end"
              onClick={handleDrawerToggle}
              className="icon-menu"
              // sx={{
              //   mr: 2,

              //   display: { sm: "none" },
              // }}
            >
              <HiBars3BottomRight className="icon-menu-bar" />
              {/* <MenuIcon /> */}
            </IconButton>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="hd-div-mg-ds">
                <img src={djs} alt="dnnd" className="img-hd" />
                <Typography
                  variant="h6"
                  component="div"
                  className="now-music-sm"
                >
                  {/* REGISCAJE DELUX INTERIORS */}
                </Typography>
              </div>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <h1 className="text-lg px-3 py-1 font-medium rounded-md nav-text-h1 ">
                REGISCAJE DELUX INTERIORS
              </h1>
              <h1 className=" ltu ">REGISCAJE DELUX INTERIORS</h1>
              {/* <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                REGISCAJE DELUX INTERIORS
              </Typography> */}
            </Link>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <List>
                <ul
                  style={{
                    display: "flex",

                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    textAlign: "right",
                  }}
                >
                  <ListItem>
                    <a
                      href="#"
                      className=" hover:bg-red-500 hover:text-white px-3 py-1 rounded-md  font-medium nav-list-h"
                    >
                      PROFILE
                    </a>
                  </ListItem>
                  <ListItem>
                    <div
                      className="relative inline-block text-left"
                      onMouseEnter={mousetoggle}
                      onMouseLeave={mousetoggle}
                    >
                      <button
                        type="button"
                        className=" hover:bg-red-500 hover:text-white px-3 py-1 rounded-md nav-list-h font-medium"
                      >
                        SERVICES
                      </button>
                      {isOpen && (
                        <>
                          <Services />
                        </>
                      )}
                    </div>
                  </ListItem>

                  <ListItem>
                    {" "}
                    <a
                      href="#"
                      className=" hover:bg-red-500 hover:text-white px-3 py-1 rounded-md nav-list-h font-medium"
                    >
                      PROJECTS
                    </a>
                  </ListItem>

                  <ListItem>
                    <div
                      className="relative inline-block text-left"
                      onMouseEnter={mouseStafftoggle}
                      onMouseLeave={mouseStafftoggle}
                    >
                      <button
                        type="button"
                        className=" hover:bg-red-500 hover:text-white px-3 py-1 rounded-md nav-list-h font-medium"
                      >
                        STAFFS
                      </button>
                      {isStaff && (
                        <>
                          <Staffs />
                        </>
                      )}
                    </div>
                  </ListItem>
                </ul>
              </List>
              {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))} */}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        {/* <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography></Typography>
        </Box> */}
      </Box>
    </Container>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
