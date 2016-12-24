//global variables


var characterArray = [];
var attacker;
var currentdefender;
var defender1, defender2, defender3;
var proceed0 = false;
var switchf = true;



$(document).ready(function() {


    // DEFINING FUNCTIONS AND OBJECTS go to line xx to see how game starts


    // prototype object
    function Character(name, healthPoints, attackPower, counterAttackPower, id, nameheader, imagesource) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
        this.ele = '<div ' + id + 'class="player"><h4>'+ nameheader + '</h4><img class="pimage" src="assets/images/' + imagesource + '</div>';
    }; 
    

    var charOne = new Character("ObiwanKenobi", 175, 12, 15, 'id="obi" ', 'Obi-wan Kenobi', 'obiwan.jpg">');
    var charTwo = new Character("QuigonGinn", 200, 14, 20, 'id="qui" ', 'Qui-gon Ginn', 'quigon.jpeg">');
    var charThree = new Character("CountDooku", 250, 16, 25, 'id="count" ', 'Count Dooku', 'countdooku.jpg">');
    var charFour = new Character("DarthMaul", 150, 18, 30, 'id="darth" ', 'Darth Maul', 'darthmaul.jpeg">');

    //fill character array
    characterArray.push(charOne);
    characterArray.push(charTwo);
    characterArray.push(charThree);
    characterArray.push(charFour);
    
    
console.log(charOne.ele);
$("#attackerbox").html(charOne.ele);
$("#attackerbox").append(charTwo.ele);
$("#attackerbox").append(charThree.ele);
$("#attackerbox").append(charFour.ele);


   


// --------------------------------------------------

});









