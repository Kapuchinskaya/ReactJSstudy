import React from "react";
import { scroller } from "react-scroll";

import { ListItem, List, Drawer } from "@material-ui/core";

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right" //где будет открываться меню
      open={props.open}
      onClose={() => {
        props.onClose(false);
      }}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement("featured")}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => scrollToElement("venueinfo")}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => scrollToElement("highlights")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElement("voting")}>
          Voting
        </ListItem>
        <ListItem button onClick={() => scrollToElement("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
