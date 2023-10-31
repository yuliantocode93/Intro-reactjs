import React from "react";

export default class List extends React.Component {
  state = {
    users: ["echo1", "echo2", "echo3", "echo4"],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(function (user, i) {
            return <li key={i}>{user}</li>;
          })}
        </ul>
      </div>
    );
  }
}
