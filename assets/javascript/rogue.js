//global variables


var cArray = [];
var attacker;
var currentdefender;
var defender1, defender2, defender3;
var checkpoint1 = false;
var checkpoint2 = false;
var tempval;




$(document).ready(function() {


    // DEFINING FUNCTIONS AND OBJECTS go to line xx to see how game starts


    // prototype object
    function Character(name, hP, aP, cAP, id, num, nameheader, imagesource) {
        this.name = name;
        this.hP = hP;
        this.aP = aP;
        this.cAP = cAP;
        this.ele = '<div ' + id + 'class="player" data-value="' + num + '"><h4>' + nameheader + '</h4><img class="pimage" src="assets/images/' + imagesource + '</div>';
    };


    var charOne = new Character("ObiwanKenobi", 175, 12, 15, 'id="obi" ', 1, 'Obi-wan Kenobi', 'obiwan.jpg">');
    var charTwo = new Character("QuigonGinn", 200, 14, 20, 'id="qui" ', 2, 'Qui-gon Ginn', 'quigon.jpeg">');
    var charThree = new Character("CountDooku", 250, 16, 25, 'id="count" ', 3, 'Count Dooku', 'countdooku.jpg">');
    var charFour = new Character("DarthMaul", 150, 18, 30, 'id="darth" ', 4, 'Darth Maul', 'darthmaul.jpeg">');

    //fill character array
    cArray.push(charOne);
    cArray.push(charTwo);
    cArray.push(charThree);
    cArray.push(charFour);
    console.log(cArray);




    // user chooses their player which appends to the attacker box, while the remaining players get appended
    // to the defenderondeck box
    function setup() {
        $("#choosebox").append(charOne.ele).append(charTwo.ele).append(charThree.ele).append(charFour.ele);
    }


    setup();

    $('.player').on("click", function() {
        if (!checkpoint1) {
            $(this).siblings().addClass("defender").appendTo("#defenderondeckbox");
            $(this).addClass("attacker").appendTo("#attackerbox");

            tempval = $(this).attr("data-value");
            attacker = cArray[tempval - 1];
            console.log(attacker);
            checkpoint1 = true;

        }
    });

    $("#defenderondeckbox").on("click", ".player.defender", function() {
        if (!checkpoint2) {
            $(this).appendTo("#defenderbox");
            tempval = $(this).attr("data-value");
            currentdefender = cArray[tempval - 1];
            console.log(currentdefender);
            checkpoint2 = true;
            $("#defenderbox").append();
        }
    });


    // --------------------------------------------------

});
