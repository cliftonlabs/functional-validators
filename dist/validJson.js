"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Tests that a value is parseable as JSON (using JSON.parse)
 * @param  {string} value - value to check
 * @return {string|undefined} error message if invalid
 */
var validJson = function validJson(value) {
  try {
    JSON.parse(value);
  } catch (e) {
    return "Invalid JSON. " + e;
  }
};

exports.default = validJson;