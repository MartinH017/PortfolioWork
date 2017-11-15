/* eslint-disable no-console */

var hello = "Hello";

var originalName = prompt( "What's your name?" );

var checkUserName = function checkUserName( userName ){
    if( !userName || userName === " " ){
        userName = prompt( "What's your name, for real this time?" );
        checkUserName( userName );
    }
    else{
        originalName = userName;
    }
};

checkUserName( originalName );

document
    .querySelector( "#subHeader" )
    .outerHTML = "<h3>Hello, " + originalName + ", are you ready to learn some stuff?</h3>";
