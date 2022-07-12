**Stage 2/4: Convert a currency**

**Description**

In this stage, we will start converting a provided amount of USD to the list of currencies in the first stage.

First, print a message to let users know what the program can do:

`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`

Get input from users like in the example. Calculate and output the result that must take 4 decimal places.

To simplify getting input from the console, we're using a JS library, check out the documentation to see how it's used.

Don’t forget that when getting the input for the desired currency, the program should be able to process lower and uppercase letters. Also, if an unknown input is provided by users, print the following message and stop the program: Unknown currency.

The value for the converted amount should not be less than 1. If it's less, output The amount cannot be less than 1.

**Objectives**

In this stage, your program should:

Output a new message about what it can do;
Ask for the currency and amount (see Examples);
Calculate and output the correct result;
Handle any uppercased or lowercased inputs;
Handle unknown currency input;
Handle an amount that is less than 1;

**Examples**
The greater-than symbol followed by a space (> ) represents the user input. Note that it's not part of the input.

**Example 1: converting to JPY**

Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > JPY
Amount: > 1
Result: 1 USD equals 113.5000 JPY

**Example 2: converting to EUR**

Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > EUR
Amount: > 18
Result: 18 USD equals 16.0200 EUR

**Example 3: unknown currency**

Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > TL
Unknown currency

**Example 4: wrong amount**

Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > USD
Amount: > -1
The amount cannot be less than 1

**Example 5: wrong amount**

Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > USD
Amount: > a
The amount has to be a number

**Example 6: lowercase handling**

Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: > jpy
Amount: > 3
Result: 3 USD equals 340.5000 JPY
