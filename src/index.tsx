import { render } from "react-dom";
import { App } from "./App";
import { Tour } from "./models/Tour";
import "./index.css";

export const runTour = (tour: Tour) => {
  // create new "root" for our app to live in
  // otherwise, selecting the body overrides the user's app
  const root: HTMLDivElement = document.createElement("div");
  root.setAttribute("id", "product-tour-root");
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  body.appendChild(root);

  render(<App tour={tour} />, root);
};

const demoTour: Tour = {
  id: 0,
  steps: [
    {
      title: "Sign up",
      description: "You can sign up!",
      selector: () => {
        return document.getElementsByClassName("chakra-button css-1riw45y")[0];
      },
    },
    {
      title: "Light Dark",
      description: "We have light and dark mode!",
      selector: () => {
        return document.getElementsByClassName("chakra-button css-1jeq6on")[0];
      },
    },
  ],
};

runTour(demoTour);
