import React, { Component } from "react";

export default class DataBaseItems extends Component {
    createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var databaseEntries = this.props.entries;
    var listItems = databaseEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};