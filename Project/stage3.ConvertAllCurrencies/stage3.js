const input = require('sync-input');

const currencies = new Map()
    .set("USD", 1.0)
    .set("JPY", 113.5)
    .set("EUR", 0.89)
    .set("RUB", 74.36)
    .set("GBP", 0.75);

function printWelcome() {
    console.log("Welcome to Currency Converter!");
    currencies.forEach((value, key) => {
        console.log(`1 USD equals  ${value} ${key}`)
    });
}

function currencyConverter() {
    console.log("What do you want to convert?");

    let convertFrom = input("From: ").toUpperCase();
    if (!checkCurrency(convertFrom)) {return}

    let convertTo = input("To: ").toUpperCase();
    if (!checkCurrency(convertTo)) {return}

    let amount = Number(input("Amount: "));
    if (!checkAmount(amount)) {return}

    let result = {
        convertFrom: currencies.get(convertFrom),
        convertTo: currencies.get(convertTo),

        calculate() {
            let convertToUSD = amount / this.convertFrom;
            return (convertToUSD * this.convertTo).toFixed(4);
        }
    };

    console.log(`Result: ${amount} ${convertFrom} equals ${result.calculate()} ${convertTo}`);
}

function checkCurrency(currency) {
    if (!currencies.has(currency)) {
        console.log("Unknown currency");
        return false;
    }
    return true;
}

function checkAmount(amount) {
    if (amount < 1) {
        console.log("The amount can not be less than 1");
        return false;
    }
    else if (!Number.isFinite(amount)) {
        console.log("The amount has to be a number");
        return false;
    }
    return true;
}

printWelcome();
currencyConverter();
