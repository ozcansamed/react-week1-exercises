import React from "react";
import Hobbies from "./Hobbies";

export default function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ];

  return hobbies.map((hobby, index) => (
    <Hobbies key={"hobby_" + index} hobby={hobby} />
  ));
}
