import React from "react";
import style from "./index.module.css";
// import { info } from "sass";

export default class module extends React.Component {
  render() {
    return (
      <div>
        <button className={`${style.btn} ${style.info}`}>Ini adalah Module</button>
      </div>
    );
  }
}
