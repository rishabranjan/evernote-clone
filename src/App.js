import React, { Component } from "react";
import "./App.css";
import SidebarComponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";
import SidebarItemComponent from "./sidebarItem/sidebarItem";
import sidebar from "./sidebar/sidebar";

const firebase = require("firebase");

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectNote: null,
      notes: null
    };
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  };

  render() {
    return (
      <div className="app-container">
        <SidebarComponent />
        <EditorComponent />
        <SidebarItemComponent />
      </div>
    );
  }
}

export default App;
