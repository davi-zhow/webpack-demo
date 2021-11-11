import _ from "./js/tools";

// const { default: printMe } = require("./js/print");

import(/* webpackChunkName:'print.js' */ "./js/print.js").then(
    ({ default: printMe }) => {
        printMe();
    }
);
console.log(_.join(["Another", "module", "loaded!"], " "));
