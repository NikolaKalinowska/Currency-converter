{
const moneyElement = document.querySelector(".js-money");
moneyElement.focus();
const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");


const rateEUR = 4.6995;
const rateGBP = 5.3214;
const rateUSD = 4.3233;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const money = +moneyElement.value;
    const currency = currencyElement.value;

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
});
}