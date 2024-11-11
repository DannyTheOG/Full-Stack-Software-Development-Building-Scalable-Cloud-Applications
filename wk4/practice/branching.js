var priceOfPhone = 400, bankBalance = 600, creditCardLimit = 800;

if (priceOfPhone < bankBalance) {
    console.log("Process Bank Payment..");

} else if (priceOfPhone < creditCardLimit) {
    console.log("Process Credit Card Payment")
    
} else {
    console.log("Insufficient Funds");
}

console.log('Transaction Completed.')


var juice = "ceres", quantity;

switch (juice) {
    case "ceres":
        quantity = 5;
        break;
    case "naturis":
        quantity = 8;
        break;
    case "welch's":
        quantity = 2;
        break;
    default:
        quantity = 0; 
        break;
}