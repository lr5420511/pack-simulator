"use strict";

const test2 = pack("./test/test2.js");

out.display = function() {
  console.log("package success!");
  console.log(mod);
  console.log(pack);
  console.log(filename + "; " + dirname);
  test2.show();
};

console.log("只能打印一次，不然缓存逻辑失败！");