const piggyBank = {
    quarters: 15,
    dimes: 4,
    nickels: 12,
    pennies: 32
}
let dollarAmount = 0;

dollarAmount += piggyBank.quarters * 0.25;
dollarAmount += piggyBank.dimes * 0.10;
dollarAmount += piggyBank.nickels * 0.05;
dollarAmount += piggyBank.pennies * 0.10;

console.log("The amount in the Piggy Bank is: ", dollarAmount);