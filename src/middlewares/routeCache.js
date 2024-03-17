//create route cache all get request
const NodeCache = require("node-cache");
const myCache = new NodeCache();
module.exports = (duration) => {
  return (req, res, next) => {
    if (req.method !== "GET") {
      return next();
    }
    let key = "__express__" + req.originalUrl || req.url;
    let cacheBody = myCache.get(key);
    if (cacheBody) {
      console.log("cache hit");
      res.send(cacheBody);
    } else {
      console.log("cache miss");
      res.originalSend = res.send;
      res.send = (body) => {
        myCache.set(key, body, duration);
        res.originalSend(body);
      };
      next();
    }
  };
};
