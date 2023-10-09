let moneyElement = document.querySelector(".js-money");
moneyElement.focus();
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let rateEUR = 4.6995;
let rateGBP = 5.3214;
let rateUSD = 4.3233;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let money = +moneyElement.value;
    let currency = currencyElement.value;

    let result;
    switch (currency) {
        case "EUR":
            result = money / rateEUR;
            break;

        case "GBP":
            result = money / rateGBP;
            break;

        case "USD":
            result = money / rateUSD;
            break;
    }

    resultElement.innerText = `${money.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
})