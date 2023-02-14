"use strict";

const middy = require("@middy/core");

async function lambdaHandler(event, context) {
  console.log("The breakpoint should stop here");
  const response = {
    result: "success",
    message: "payment processed correctly",
  };
  return { statusCode: 200, body: JSON.stringify(response) };
}

const hello = middy().handler(lambdaHandler);

module.exports = { hello };
