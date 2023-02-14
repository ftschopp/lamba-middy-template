/**
 * AWS λ lambda template service
 * This lambda acts as an template for event listener on an API Gateway endpoint.
 *
 * @module lambda-template-service
 */
"use strict";

const { hello } = require("./src/hello-handler");

module.exports = { hello };
