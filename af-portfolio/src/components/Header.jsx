import React from "react";
import Nav from "./Nav";


export default function Header () {
  return (
    <div className="header">
      <div>
        <div className="greeting">
          <h1>Hello!</h1>
        </div>
        <div className="intro">
          <h1>my name is</h1>
        </div>
        <div className="title">
          <h1>Ashlan Filbrun</h1>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </div>
  )
}