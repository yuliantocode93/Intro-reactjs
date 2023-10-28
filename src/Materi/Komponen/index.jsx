import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {
  render() {
    return (
      // tipe data pada props
      <div>
        <ClassComponent nama="Yulianto" />
        <FunctionalComponent nama={30} />
      </div>
    );
  }
}
