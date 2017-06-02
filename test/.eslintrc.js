module.exports = {
  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },
  rules: {
    // allow empty arrow functions.
    'no-empty-function': ['error', {allow: ['arrowFunctions']}],
    // allow the new keyword without assigning it to something.
    // Used to test if a consturctor properly throws errors.
    'no-new': 0,
    // allow use of void operator
    'no-void': 0,
  }
};
