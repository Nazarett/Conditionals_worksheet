//Gerardo D. Nazarett 06/15/15 Activity: Conditionals Worksheet

//Are you a heavy weight
//Heavy enough to enter heavy weight division of the contest

var heavyWeight = 250;

//If weight is higher than 250lbs, you will enter the contest, other wise you are out.

heavyWeight = (heavyWeight >= 250) ? "You are a heavy weight" : "You will have to join another weight class";
    console.log(heavyWeight);

//Last chance for gas

//Do you have to stop
//Have enough gas to stop later

var gasStationDist = 200; //Miles
var gasEfficiency = 37; //Mpg
var gasTankPercent = 25; //25% = .25
var tankCapicity = 30; //Gallons 25% = 7.5 gallons

console.log("The gas station is " + gasStationDist + " miles away.");
console.log("My car does " + gasEfficiency + " mpg.");
console.log("I have " + gasTankPercent + "% left on my tank.");
console.log("The tank of my car can hold up to " + tankCapicity + " gallons");

