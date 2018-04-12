var Letter = require('./letter.js');

// Word constructor
var Word = function (werd) {
    this.word = werd;
    this.letterStore = []; 
};

// Methods of Word constructor
Word.prototype.getLetters = function () {
    for (i=0; i<this.word.length; i++){
        var newLts = new Letter (this.word[i]);
        this.letterStore.push(newLts);
        return this.letterStore;
    };
};
Word.prototype.returnWord = function () {

};

var newWord = new Word ('klingon');
newWord.getLetters();


module.exports = Word;
