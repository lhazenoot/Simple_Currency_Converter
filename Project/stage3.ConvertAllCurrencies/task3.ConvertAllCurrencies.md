**Stage 3/4: Convert all currencies**

**Description**

In this stage, we need to adjust our program to start converting all currencies between themselves.

First, remove the previous message:

`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`

Then, output the following message: What do you want to convert? After this, users provide input that indicates a currency to convert from. Don't forget to handle all unknown and invalid inputs like in the previous stage.

**Objectives**

In this stage, your program should:

* Ask for the currencies (see Examples);
* Calculate and output the result;
* Handle any unknown and incorrect inputs.

Examples
The greater-than symbol followed by a space (> ) represents the user input. Note that it's not part of the input.

**Example 1: EUR to GBP**

`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
What do you want to convert?
From: > EUR
To: > GBP
Amount: > 115
Result: 115 EUR equals 96.9101 GBP`

**Example 2: wrong input**

`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
What do you want to convert?
From: > USD
To: > This is a currency, believe me!
Unknown currency`

**Example 3: jpy to jpy**

`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
What do you want to convert?
From: > jpy
To: > jpy
Amount: > 3
Result: 3 JPY equals 3.0000 JPY`
