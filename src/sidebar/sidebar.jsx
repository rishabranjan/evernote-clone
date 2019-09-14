import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../helper";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./sytles";

class SidebarComponent extends Component {
  state = {};
  render() {
    return <div>Hello from the sidebar</div>;
  }
}

export default withStyles(styles)(SidebarComponent);
