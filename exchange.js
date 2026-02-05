const amount = document.getElementById('amount');
const Currency = document.getElementById('Currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY = "FByKgmff8SPTY3I82s9ityZANJIrS8b5U6eBPWLw";
const API_URL = "https://api.api-ninjas.com/v1/exchangerate?pair=GBP_AUD";

convert.addEventListener('click', () => {
    const amountValue = Number(amount.value);
    const currencyValue = Currency.value;

    if (!amountValue || amountValue <= 0) {
        result.innerHTML = "Please enter a valid amount";
        return;
    }

    fetch(API_URL, {
        headers: {
            'X-API-Key': API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
          const rate = data.exchange_rate;
          console.log('rate',rate)
          const resultPrice = amountValue * rate;
          console.log ('result',resultPrice)
        result.innerHTML = `${amountValue} USD = ${resultPrice.toFixed(2)} ${currencyValue}`;
    })
    .catch(error => {
        console.error('Error fetching exchange rates:', error);
        result.innerHTML = 'Error fetching exchange rates. Please try again later.';
    });
});  