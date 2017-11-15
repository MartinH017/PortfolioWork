var story = {
    "start": "You are walking in Time Square, as a beehive plummets from the sky. As you look up, you decide, should I dive and catch it or should I stand here and watch it fall.",
    "dive and catch": "As you dive to catch the beehive, you scrape your knee on a rusty nail engulfed with tetanus but catch the beehive. The queen bee flys out and offers to cure your tetanus with magical honey, do you accept?",
    "stand and watch": "You take a step back to avoid any casulties, and notice the beehive will land directly on a young boy eating icecream with his puppy. The thought crosses your mind, should I warn the boy, or stay silent.",
    "yes": "You eat the magic honey and die from an allergic reaction.",
    "no": "The queen bee is infurated that you refused her offer and orders the hive to sting you to death."
};


// turn into recursion, a function that calles itself until a choic is selected
var runStory = function runStory(){
    var choice = prompt( story.start );

    if( choice === "dive and catch" ){
        choice = prompt( story[choice] );

        if( choice === "yes" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice];
        }
        else if( choice === "no" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice];
        }
        else{

        }
    }
    else if( choice === "stand and watch" ){
        // prompt( story[choice] ); // execute the choice associated with stand and watch object
        document // use query selector to show the user final choice if story ends.
            .querySelector( "#output" )
            .textContent = story[choice];
    }
    else{
        runStory();
    } // reprompt the start
};

runStory();
