var _ = require('lodash');

var operators = {
    "+": function (a, b) {
        return a + b;
    },
    "-": function (a, b) {
        return a - b;
    },
    "*": function (a, b) {
        return a * b;
    },
    "/": function (a, b) {
        return a / b;
    }
};

function sanitizeExpression(expression) {
    return expression.replace(/[^0-9\+\-\*\/\s]/ig, '');
}

function isOperand(token) {
    return _.isNumber(token) && !_.isNaN(token);
}

function evaluateTokens(tokens) {
    var stack = [], token;
    while (token = tokens.shift()) {
        var op = Number(token);
        if (isOperand(op)) {
            stack.push(op);
        } else {
            var op2 = stack.pop();
            var op1 = stack.pop();
            stack.push(operators[token](op1, op2));
        }
    }
    return stack.pop();
}

function getTokens(sanitizedExpr) {
    return sanitizedExpr.trim().split(/\s+/);
}

function calculate(expression) {
    var sanitizedExpr = sanitizeExpression(expression);
    var tokens = getTokens(sanitizedExpr);
    return evaluateTokens(tokens);
}

module.exports.calculate = calculate;