import { render } from "react-dom";
import { App } from "./App";
import { Tour } from "./models/Tour";

export const runTour = (tour: Tour) => {
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

  // add some popper styles to the head
  // TODO: bundle our own stylesheet
  const style: HTMLStyleElement = document.createElement("style");
  style.appendChild(document.createTextNode(popperStyles));
  head.appendChild(style);

  // create new "root" for our app to live in
  // otherwise, selecting the body overrides the user's app
  const root: HTMLDivElement = document.createElement("div");
  root.setAttribute("id", "product-tour-root");
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  body.appendChild(root);

  render(<App tour={tour} />, root);
};

// This is a terrible hack!
const popperStyles = `
  #product-tour-arrow,
  #product-tour-arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  #product-tour-arrow {
    visibility: hidden;
  }

  #product-tour-arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }

  #product-tour-tooltip[data-popper-placement^="top"] > #product-tour-arrow {
    bottom: -4px;
  }

  #product-tour-tooltip[data-popper-placement^="bottom"] > #product-tour-arrow {
    top: -4px;
  }

  #product-tour-tooltip[data-popper-placement^="left"] > #product-tour-arrow {
    right: -4px;
  }

  #product-tour-tooltip[data-popper-placement^="right"] > #product-tour-arrow {
    left: -4px;
    }
`;
