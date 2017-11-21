/* global $ */
var $output = $( "#output" );
var $subtitle = $( "<h2>Hello I'm a subtitle</h2>" );

$output
    .html( "<h1>Hello again, world!</h1>" )
    .css( {
        "color": "blue",
        "font-size": "200%",
        "margin-left": "300px"
    } )
    .append( $subtitle )
    .fadeOut( 1000 )
    .fadeIn()
    .animate( {
        "margin-top": "50%"
    }, {
        "duration": "5000",
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( "color", "yellow" );
        }
    } );
