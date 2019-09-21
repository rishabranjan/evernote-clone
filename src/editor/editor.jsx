import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../helper";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class SidebarComponent extends Component {
  state = {
    text: "",
    tittle: "",
    id: ""
  };
  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div className={classes}>
        <ReactQuill></ReactQuill>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarComponent);
