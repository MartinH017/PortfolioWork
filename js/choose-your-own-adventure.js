var story = {
    "start": {

        "text": "You are walking in Time Square, as a beehive plummets from the sky. As you look up, you decide, should I dive and catch it or should I stand here and watch it fall.",
        "choices": [ "dive and catch", "stand and watch" ]
    },
    "dive and catch": {

        "text": "As you dive to catch the beehive, you scrape your knee on a rusty nail engulfed with tetanus but catch the beehive. The queen bee flys out and offers to cure your tetanus with magical honey, do you accept?",
        "choices": [ "yes", "no" ]
    },

    "stand and watch": {

        "text": "You take a step back to avoid any casulties, slip on a banana peel and break your neck",

        /* "You take a step back to avoid any casulties, and notice the beehive will land directly on a young boy eating icecream with his puppy. The thought crosses your mind, should I warn the boy, or stay silent.",
        "choices": [ "warn", "silent" ]*/
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
    var choice;

    if( choices ){
        choice = prompt( chapter.text );

        if( choice === choices[0] || choice === choices[1] ){
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
