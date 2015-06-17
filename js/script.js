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

var nextGasStationDist = 200; //Miles
var gasEfficiency = 38; //Mpg
var gasTankPercent = 26; //25% = .25
var tankCapicity = 30; //Gallons 25% = 7.5 gallons

console.log("The gas station is " + nextGasStationDist + " miles away.");//Distance of next gas station.
console.log("My car does " + gasEfficiency + " mpg."); //Gas efficiency of vehicle in miles per gallon.
console.log("I have " + gasTankPercent + "% left on my tank."); //Whats left in the tank in percentage.
console.log("The tank of my car can hold up to " + tankCapicity + " gallons"); //Max of gallons that car can handle


if(gasTankPercent <= 25 || tankCapicity < 7 || gasEfficiency<= 37 || nextGasStationDist >= 200){
    console.log("We will stop to get gas.");


}else{
    console.log("We will drive 200 miles for the next gas station.")
}


