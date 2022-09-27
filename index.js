/*
This function is in charge of grabbing the amount of dice the user wishes to roll at a single time
It returns the converted integer value of whatever was in the "How many times?" box.
*/
const getExtras = () => {
    var count = document.getElementById("quantity")
    return parseInt(count.value)
}
/*
This function is in charge of grabbing the amount we are adding to the dice.
It retuns the converted integer value of whatever was in the "Adding how much?" box.
*/
const getAddons = () => {
    var add = document.getElementById("add")
    return parseInt(add.value)
}
/*
This function is the meat and potatoes of the dice roller, it is only called when the "Roll!".
It returns nothing but instead it edits the html text of the display value
*/
const roll = () => {
    //It grabs the display value and saves it to allow for dynamic updating as each roll is made
    var number = document.getElementById("diceResult")
    //It also grabs and converts the type of dice the user wishes to roll with the value being the number of sides
    let dice = parseInt(document.getElementById("diceValues").value)
    //An array is created to hold at least one value given by the rolls
    var rolls = []
    //This loops a set number of times determined by the returned value of getExtras().
    //Each loop will push a random value that fits within the dice's set sides into the array from before
    for (var i = 0; i < getExtras(); i++) {
        rolls.push(Math.floor(Math.random() * dice) + 1 + getAddons())
    }
    //Sets the current list of rolls to be displayed
    number.innerHTML = rolls
}