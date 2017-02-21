"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var joinRules = function joinRules(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0];
  };
};

exports.default = joinRules;