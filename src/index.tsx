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
      selector: `main section div a[href="https://app.meeshkan.com"]`,
    },
    {
      title: "Light Dark",
      description: "We have light and dark mode!",
      selector: `button[aria-label="Light/Dark mode toggle"]`,
    },
    {
      title: "Roadmap",
      description:
        "This roadmap is directly connected to our project management software. Our roadmap is serious, not just for show!",
      selector: `nav a[href="/roadmap/"]`,
      beforeStep: () => {
        const dropdown: HTMLElement = document.querySelector(
          `nav div button[aria-haspopup="dialog"]`
        );
        dropdown.focus();
      },
      afterStep: (selected) => {
        selected.click();
        setTimeout(() => {
          document.getElementById("email").focus();
        }, 200);
      },
    },
  ],
};

runTour(demoTour);
