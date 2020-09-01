// Player variables
var playerHealthTotal = 100;
var playerCurrentHealth = 100;
var enemyHealth = 100;
var playerAttack;
var playerDefense;
var playerDodge;
var playerExp = 0;
var playerLevel = 1;
var min;
var max;

// Health
document.getElementById("health-amount-text").innerHTML = playerCurrentHealth + "/" + playerHealthTotal;

// Generate a true random number  
function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  

// Item creator
var bear = {"name": "Bear",
  "attribute": "Health",
  "amount": Math.round(randomNumber(1, 15))}

var bull = {"name": "Bull",
  "attribute": "Strength",
  "amount": Math.round(randomNumber(1, 15))}

var names = ["Sterling", "Wicked", "Grand"]
var weaponType = ["Bow", "Sword", "Staff"]

function createDamage(e) {
    switch(e) {
        case weaponType[0]:
            min = Math.round(randomNumber(1, 2) + (playerLevel * 1.15));
            console.log(min);
            max = Math.round(randomNumber(4, 10) + (playerLevel * 1.25));
            console.log(max);
            break;
        case weaponType[1]:
            min = Math.round(randomNumber(6, 8) + (playerLevel * 1.15));
            max = Math.round(randomNumber(11, 18) + (playerLevel * 1.25));
            break;
        case weaponType[2]:
            min = Math.round(randomNumber(1, 3) + (playerLevel * 1.15));
            max = Math.round(randomNumber(5, 9) + (playerLevel * 1.25));
            break;
    }
    return(min, max);
}


function createItem(e) {
    var w = e.name;
    var x = e.attribute;
    var y = e.amount;
    var z = Math.round(randomNumber(1, names.length) - 1);
    console.log("names:", z);
    var a = Math.round(randomNumber(1, weaponType.length) - 1);
    console.log("weapon:", a);
    createDamage(weaponType[a]);

    console.log(names[z], weaponType[a], "of the", w);
    console.log("Damage:", min, "-", max);
    console.log("+", y, "to", x);

    document.getElementById("name-text").innerHTML = names[z] + " " + weaponType[a] + " of the " + w;
    document.getElementById("damage-text").innerHTML = "Damage: " + min + " - " + max
    document.getElementById("modifier-text").innerHTML = "+" + y + " to " + x;
}

function pickItem() {
    var x = Math.round(randomNumber(1, 2));

    switch(x) {
        case 1:
          createItem(bear);
          break;
        case 2:
          createItem(bull);
          break;
        default:
          
      }
}
