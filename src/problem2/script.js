document.getElementById('exchangeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    var amount = parseFloat(document.getElementById('input-amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    
    // Define exchange rates
    var exchangeRates = {
        'USD': {'EUR': 0.85, 'GBP': 0.75},
        'EUR': {'USD': 1.18, 'GBP': 0.88},
        'GBP': {'USD': 1.33, 'EUR': 1.14}
    };
    
    // Calculate exchange
    var exchangeRate = exchangeRates[fromCurrency][toCurrency];
    var result = amount * exchangeRate;
    
    // Display result
    document.getElementById('output-amount').innerHTML = amount + ' ' + fromCurrency + ' = ' + result.toFixed(2) + ' ' + toCurrency;
});