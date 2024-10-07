// Simulación de tasas de cambio
const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 129 },
    GBP: { USD: 1.33, EUR: 1.14, JPY: 147 },
    JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068 }
  };
  
  document.getElementById('convert-btn').addEventListener('click', function() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultDiv = document.getElementById('result');
  
    if (isNaN(amount) || amount <= 0) {
      resultDiv.textContent = 'Por favor, ingrese una cantidad válida.';
      return;
    }
  
    if (fromCurrency === toCurrency) {
      resultDiv.textContent = `El valor convertido es el mismo: ${amount} ${toCurrency}.`;
      return;
    }
  
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
  
    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  });