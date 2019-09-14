import React, { Component } from "react";
import "./App.css";

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
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
