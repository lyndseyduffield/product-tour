import { render } from "react-dom";
import { App } from "./App";
import { Tour } from "./models/Tour";

export const runApp = (tour: Tour) => {
  // install tailwind css
  // TODO: bundle tailwind css in the script
  const link: HTMLLinkElement = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute(
    "href",
    "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
  );
  const head: HTMLHeadElement = document.getElementsByTagName("head")[0];
  head.appendChild(link);

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
      title: "My First Step",
      description: "This is my very first step. Whoopee?",
      selector: () => {
        return document.getElementById("big-div");
      },
    },
    {
      title: "My Second Step",
      description: "Is this thing on??????",
      selector: () => {
        return document.getElementById("big-div");
      },
    },
  ],
};

runApp(demoTour);
