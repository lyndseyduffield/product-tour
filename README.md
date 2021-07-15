# product-tour

Embed a product tour, as a script, on any website.

For example, to run a simple product tour on Meeshkan.com, go to https://meeshkan.com and enter these steps in the console.

Load the product tour script:

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
