import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helper";
class SidebarItem extends Component {
  state = {};
  render() {
    return <div>Hello from the sidebarItem</div>;
  }
}

export default withStyles(styles)(SidebarItem);
