/* eslint-disable complexity, no-console */
var fizzBuzzResult = "";

var fizzBuzz = function fizzBuzz( num ){
    if( num % 15 === 0 ){
        fizzBuzzResult += ", FizzBuzz";
    }
    else if( num % 3 === 0 ){
        fizzBuzzResult += ", Fizz";
    }
    else if( num % 5 === 0 ){
        fizzBuzzResult += ", Buzz";
    }
    else if( num === 1 ){
        fizzBuzzResult += num;
    }
    else{
        fizzBuzzResult += ", " + num;
    }
};

var fizzBuzzLightYear = function fizzBuzzLightYear( limit ){
    for( var i = 1; i < limit; i++ ){
        fizzBuzz( i );
    }
};

fizzBuzzLightYear( 50 );

document
    .querySelector( "#fizzBuzz" )
    .textContent = fizzBuzzResult;
// document querySelectorAll
