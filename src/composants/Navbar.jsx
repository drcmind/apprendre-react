import React from "react";

export default function Navbar({ nombrelike }) {
  return (
    <div className="entete">
      <h3>Les posts liker sont : {nombrelike}</h3>
    </div>
  );
}
