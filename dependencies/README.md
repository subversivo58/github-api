## GiHub API dependencies with ES6 module (only browser)


The Github.js v3.3.0 original library has the following packages as a dependency:

* **axios**: see on [github](https://github.com/axios/axios) or [npm](https://www.npmjs.com/package/axios) | MIT License
* **js-base64**: see on [github](https://github.com/dankogai/js-base64) or [npm](https://www.npmjs.com/package/js-base64) | BSD-3-Clause License
* **utf8**: see on [github](https://github.com/mathiasbynens/utf8.js) or [npm](https://www.npmjs.com/package/utf8) | MIT License
* **debug**: see on [github](https://github.com/visionmedia/debug) or [npm](https://www.npmjs.com/package/debug) | MIT License


Not all facilities support the ES6 `import` method, just as many parts of these facilities are designed for the working environment of Node.js.

The dependencies used here have been refactored to use only the essentials supported by the browser environment.

The "debug" module has been completely replaced by a (very poor) function of `console.debug`.

The "axios" module was the only dependency maintained in this adaptation because it was not possible to replicate its functionality with the standard search api `fetch ()`, nor to find a similar library that does not cause conflict and errors in the original Github.js library code.


It is assumed that the "axios" library must be previously linked by the standard method:

```html
<!-- in your HTML file -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```


Axios is an incredible library, but not all of its functionality is necessary to use the Github.js library or this adaptation ... so, unfortunately, it cannot be removed from this project (for now)