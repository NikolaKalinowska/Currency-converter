{    
    const rateEUR = 4.5500;
    const rateGBP = 5.2646;
    const rateUSD = 4.3072;

    const amountElement = document.querySelector(".js-money");
    amountElement.focus();
    const formElement = document.querySelector(".js-form");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const calculateResult = (amount, currency) => {

        switch (currency) {
            case "EUR":
                return amount / rateEUR

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const amount = +amountElement.value;
        const currency = currencyElement.value;
    
        let result = calculateResult(amount, currency);
    
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }
    
    formElement.addEventListener("submit", handleFormSubmit);
}