//global variables


var characterArray = [];
var attacker;
var currentdefender;
var defender1, defender2, defender3;
var proceed0 = false;



$(document).ready(function() {


    // DEFINING FUNCTIONS AND OBJECTS go to line xx to see how game starts


    // prototype object
    function Character(name, healthPoints, attackPower, counterAttackPower) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
    }

    var charOne = new Character("ObiwanKenobi", 175, 12, 15);
    var charTwo = new Character("QuigonGinn", 200, 14, 20);
    var charThree = new Character("CountDooku", 250, 16, 25);
    var charFour = new Character("DarthMaul", 150, 18, 30);

    //fill character array
    characterArray.push(charOne);
    characterArray.push(charTwo);
    characterArray.push(charThree);
    characterArray.push(charFour);
    
    


    $('.player').on("click", function(){
        $("#attacker").append(this);
    var temp = ($(this).attr('data-player') - 1);
    console.log(temp);
   characterArray.splice(characterArray[temp], 1);
    console.log(characterArray);
    attacker = $(this);
    $(attacker).removeClass("starter");
    console.log(attacker);
    $(attacker).addClass('attacker').appendTo("#attackerbox");
   proceed0 = true;
});
// function addDefenders (){
//     if (proceed0 && $(".player").hasClass("starter"))
//     {
//         $(".starter").appendTo("#defenderondeckbox");
//     }
//     else{
//         console.log("else statement");
//     }
// }
 

    $('.confirmbutton').on("click", function(){
        if (proceed0)
        {
         $(".starter").appendTo("#defenderondeckbox");
        }
    });
// characterArray -= (characterArray[$(this).attr('data-player') - 1]);
// console.log()
   

    





// --------------------------------------------------

});