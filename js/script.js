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
var gasEfficiency = 37; //Mpg
var gasTankPercent = 25; //25% = .25
var tankCapicity = 30; //Gallons 25% = 7.5 gallons
var gasLeft = (tankCapicity * gasTankPercent / 100); // calculation for gas left

console.log("The gas station is " + nextGasStationDist + " miles away.");//Distance of next gas station.
console.log("My car does " + gasEfficiency + " mpg."); //Gas efficiency of vehicle in miles per gallon.
console.log("I have " + gasTankPercent + "% left on my tank."); //Whats left in the tank in percentage.
console.log("The tank of my car can hold up to " + tankCapicity + " gallons"); //Max of gallons that car can handle


if(gasTankPercent <=25 && gasLeft < 8 || nextGasStationDist >= 200){

    console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can”")


}else{
    console.log("Yes, you can make it without stopping for gas.")
}


//Check the login

var userName = prompt("Welcome enter username" ); //Prompt for the username

if(userName === "admin"){ //Making username equal to admin and only admin
    console.log(userName);
    var password = prompt("Password"); //Prompt for password
    if(password === "123"){ //Making password equal to 123 and only 123
        console.log(password)
        alert("You have succesfully logged in") //Alert for entering correct username and password

    }else{alert("Password does not match our records") // Alert for entering incorrect password

    }

}else{ alert("Username not found.Try again") //Alert for entering incorrect username

}