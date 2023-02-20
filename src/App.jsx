import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Bailey",
      breed: "Golden Retriever",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Momo",
      breed: "Siamese",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "spot",
      breed: "Dalmatian",
    }),
    React.createElement(Pet, {
        animal: "Dog",
        name: "Nova",
        breed: "German Shepherd",
      }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));