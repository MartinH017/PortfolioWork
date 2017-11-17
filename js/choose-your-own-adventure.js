var story = {
    "start": {

        "text": "You are walking in Time Square, as a beehive plummets from the sky. As you look up, you decide, should I dive and catch it or should I stand here and watch it fall.",
        "choices": [ "dive and catch", "stand and watch" ]
    },
    "dive and catch": {

        "text": "As you dive to catch the beehive, you scrape your knee on a rusty nail engulfed with tetanus but catch the beehive. The queen bee flys out and offers to cure your tetanus with magical honey, do you accept?",
        "choices": [ "yes", "no", "stand and watch" ]
    },

    "stand and watch": {

        "text": "You take a step back to avoid any casulties, slip on a banana peel and break your neck",


    },
    
    "yes": {

        "text": "You eat the magic honey and die from an allergic reaction.",
    },

    "no": {

        "text": "The queen bee is infurated that you refused her offer and orders the hive to sting you to death.",
    },
};


var runStory = function runStory( branch ){
    var chapter = story[branch];
    var choices = chapter.choices;
    var isValidChoice = false;
    var choice;

    if( choices ){
        choice = prompt( chapter.text );

        // validate choice here
        for( var i = 0; i < choices.length; i++ ){
            if( choice === choices[i] ){
                isValidChoice = true;
            }
        }

        if( isValidChoice ){
            runStory( choice );
        }
        else{
            runStory( branch );
        }
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
};


runStory( "start" );
