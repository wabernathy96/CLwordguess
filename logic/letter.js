// Letter constructor
var Letter = function (lts) {
    this.char = lts.toString().toUpperCase();
    this.displayChar = false;
};

// Method on Letter constructor to showChar
Letter.prototype.showChar = function () {
    if (this.char === ''){
        this.displayChar = true;
        this.char = '/';
        console.log(this.char);
    };
    
    if (this.displayChar){
        return this.char;
    }else{
        this.char = '_'
        return this.char;
    }
};

// Test for letter constructor
var ltsB = new Letter ('a');
ltsB.showChar();


module.exports = Letter;