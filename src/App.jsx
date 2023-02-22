import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name ="Bailey" animal ="Dog" Breed="Golden Retriever" />
    <Pet name ="Momo" animal ="Cat" Breed="Siamese" />
    <Pet name ="Nova" animal ="Dog" Breed="German Shepherd" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);