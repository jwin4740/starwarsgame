//global variables


var cArray = [];
var attacker;
var currentdefender;
var defender1, defender2, defender3;
var checkpoint1 = false;




$(document).ready(function() {


    // DEFINING FUNCTIONS AND OBJECTS go to line xx to see how game starts


    // prototype object
    function Character(name, hP, aP, cAP, id, nameheader, imagesource) {
        this.name = name;
        this.hP = hP;
        this.aP = aP;
        this.cAP = cAP;
        this.ele = '<div ' + id + 'class="player"><h4>' + nameheader + '</h4><img class="pimage" src="assets/images/' + imagesource + '</div>';
    };


    var charOne = new Character("ObiwanKenobi", 175, 12, 15, 'id="obi" ', 'Obi-wan Kenobi', 'obiwan.jpg">');
    var charTwo = new Character("QuigonGinn", 200, 14, 20, 'id="qui" ', 'Qui-gon Ginn', 'quigon.jpeg">');
    var charThree = new Character("CountDooku", 250, 16, 25, 'id="count" ', 'Count Dooku', 'countdooku.jpg">');
    var charFour = new Character("DarthMaul", 150, 18, 30, 'id="darth" ', 'Darth Maul', 'darthmaul.jpeg">');

    //fill character array
    cArray.push(charOne);
    cArray.push(charTwo);
    cArray.push(charThree);
    cArray.push(charFour);
    console.log(cArray);




    // user chooses their player which appends to the attacker box, while the remaining players get appended
    // to the defenderondeck box
    function setup() {
        $("#choosebox").html(charOne.ele);
        $("#choosebox").append(charTwo.ele);
        $("#choosebox").append(charThree.ele);
        $("#choosebox").append(charFour.ele);
    }


setup();

    $('.player').on("click", function() {
        if (checkpoint1 === false) {
            $(this).siblings().addClass("defender").appendTo("#defenderondeckbox");
            $(this).addClass("attacker").appendTo("#attackerbox");
            console.log(checkpoint1);
            checkpoint1 = true;

        }
    });

    $("#defenderondeckbox").on("click", ".player.defender", function() {
        
        currentdefender = this;
        console.log(currentdefender);
        $(currentdefender).appendTo("#defenderbox");
    });


    // --------------------------------------------------

});
