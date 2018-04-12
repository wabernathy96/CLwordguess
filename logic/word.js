var lts = require('./letter.js');

var Word = function (write) {
    this.ltsArr = [];
    this.write = write;
    this.incorrectLts = 0;
    this.ltsGuess = [];
    this.init();
};

