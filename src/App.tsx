import { useEffect, useState } from "react";
import { render } from "react-dom";

export const runApp = () => {
  render(<App />, document.getElementsByTagName("body")[0]);
};

const App: React.FC<Record<string, unknown>> = () => {
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const link: HTMLLinkElement = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute(
      "href",
      "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    );
    const head: HTMLHeadElement = document.getElementsByTagName("head")[0];
    head.appendChild(link);
    setTimeout(() => setInitialized(true), 500);
  }, []);

  const header = <h1 className="text-xl text-pink-300">Product Tour</h1>;

  return initialized ? header : null;
};
