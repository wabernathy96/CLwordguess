// Letter constructor
var Letter = function (lts) {
    this.char = lts.toString().toUpperCase();
    this.charGuess = false;
};

// Method on Letter constructor to showChar
Letter.prototype.showChar = function () {
    if (this.char == ''){
        this.charGuess = false;
        this.char = '_';
        console.log(this.char);
    }else{
        this.charGuess = true;
        console.log(this.char);
    };
};

// var lts1 = new Letter ('a');
// lts1.showChar();


module.exports = Letter;