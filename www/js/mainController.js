"use strict";
var rpnCalculator = require('../../rpnCalculator');

module.exports = function () {
    var vm = this;

    vm.calculate = function (expression) {
        vm.result = rpnCalculator.calculate(expression);
    };

    vm.clear = function () {
        vm.expression = "";
        vm.result = "";
    };
};