"use strict";

const moduleModule = require("./module");
const fsModule = require("fs");
const pathModule = require("path");

global.package = function(path) {
  if(typeof path !== "string") {
    throw new Error("global.package: path of argument isn't a vaild argument!");
  }  
  path = pathModule.resolve(pathModule.normalize(path));
  let hasCache = global.package.cache.hasOwnProperty(path) && 
  global.package.cache[path] instanceof moduleModule.Module;
  let exports;
  if(hasCache) {
    exports = global.package.cache[path].Output;
  } else {
    let tempModule = new moduleModule.Module(path);
    global.package.cache[path] = tempModule;
    global.package.closer(tempModule);
    exports = tempModule.Output;    
  }
  return exports;
};

global.package.cache = {};

global.package.closer = function(module) {
  if(!(module instanceof moduleModule.Module)) {
    throw new Error("global.package.closer: module of argument isn't a vaild argument");
  }
  (eval("(function(out, mod, pack, filename, dirname) {" + fsModule.readFileSync(module.AbsolutePath, "utf8") + "})"))
  (
    module.Output, 
    module, 
    global.package, 
    module.AbsolutePath, 
    module.AbsoluteDirectory
  )
};