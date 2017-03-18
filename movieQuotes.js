var movieQuotes = function(){
    this.quotesArray = [
        'Do or do not. There is no try',
        'Don\'t act like you\'re not impressed',
        'Cats are useless',
        'May the Force be with you',
        'Fool of a Took!',
        'Do not take me for some conjurer of cheap tricks!'
    ],
    this.getNewQuote = function(){
        return this.quotesArray[getRandomInt(0,this.quotesArray.length)];
    }
}

module.exports = movieQuotes;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}