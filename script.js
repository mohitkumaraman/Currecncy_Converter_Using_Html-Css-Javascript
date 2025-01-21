// Function to convert currency
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    // Check if the user has entered a valid amount
    if (!amount || amount <= 0) {
        resultDiv.innerHTML = 'Please enter a valid amount';
        return;
    }

    // API URL (Replace with your API key)
    const apiKey = '0cb23494e09602c72ee0dda9';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        // Fetch the exchange rates from the API
        const response = await fetch(url);
        const data = await response.json();

        // Check if the response is valid
        if (data.result === 'error') {
            resultDiv.innerHTML = 'Error fetching exchange rates';
            return;
        }

        // Get the exchange rate for the "toCurrency"
        const rate = data.conversion_rates[toCurrency];

        // Calculate the conversion
        const convertedAmount = (amount * rate).toFixed(2);

        // Display the result
        resultDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        resultDiv.innerHTML = 'Error fetching data from API';
    }
}
