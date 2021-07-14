# product-tour

Embed a product tour, as a script, on any website.

For example, to run a simple product tour on Meeshkan.com, go to https://meeshkan.com and enter these steps in the console.

First, load the product tour script:

```js
{
  const js = "makenna-tour.js";
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://cdn.jsdelivr.net/gh/lyndseyduffield/product-tour/dist/" + js;
  document.getElementsByTagName("head")[0].appendChild(script);
}
```

Then, create your tour:

```js
const demoTour = {
  id: 0,
  steps: [
    {
      title: "Sign up",
      description:
        "You can sign up to Meeshkan with a brand-new account of your very own!",
      selector: () => {
        return document.getElementsByClassName("chakra-button css-1riw45y")[0];
      },
    },
    {
      title: "Light and Dark",
      description:
        "Are you a morning person or a night owl? Luckily, you don't have to choose with Meeshkan!",
      selector: () => {
        return document.getElementsByClassName("chakra-button css-1jeq6on")[0];
      },
    },
    {
      title: "Changelog",
      decription: "this is a changelog",
      selector: () => {
        return document.getElementsByClassName("chakra-link css-f4h6uy")[0];
      },
    },
  ],
};
```

Finally, execute the tour:

```js
window.productTour.runTour(demoTour);
```
