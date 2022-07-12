const input = require('sync-input');

const currencies = new Map();
currencies.set("USD", 1.0);
currencies.set("JPY", 113.5);
currencies.set("EUR", 0.89);
currencies.set("RUB", 74.36);
currencies.set("GBP", 0.75);

function printWelcomeToCurrencyConverter() {
    console.log("Welcome to Currency Converter!\n" +
        "1 USD equals  1 USD\n" +
        "1 USD equals  113.5 JPY\n" +
        "1 USD equals  0.89 EUR\n" +
        "1 USD equals  74.36 RUB\n" +
        "1 USD equals  0.75 GBP")
}

function checkCurrency(currency) {
    if (currencies.has(currency)) {
        return true;
    }
    console.log("Unknown currency");
    return false;
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

function currencyConverter() {
    console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
    console.log("Type the currency you wish to convert: USD");

    let convertTo = input("To: ").toUpperCase();
    if (!checkCurrency(convertTo)) {
        return;
    }

    let amount = Number(input("Amount: "));
    if (!checkAmount(amount)) {
        return;
    }

    let result = Number(1 * currencies.get(convertTo) * amount).toFixed(4);

    console.log(`Result: ${amount} USD equals ${result} ${convertTo}`);
}

printWelcomeToCurrencyConverter();
currencyConverter();
