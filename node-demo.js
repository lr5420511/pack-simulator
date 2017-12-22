"use strict";

require("./lib/package");

const out = global.package("./test/test1.js");

out.display();

console.log(typeof global.package("./test/test1.js") === "object");
global.package("./test/test1.js");
global.package("./test/test1.js");
global.package("./test/test1.js");
global.package("./test/test1.js");
