function conversionValut() {
    const currencyFrom = document.getElementById("currencyFrom").value;
    const currencyTo = document.getElementById("currencyTo").value;
    const valore = parseFloat(document.getElementById("currencyAmount").value);
  
    const exchangeRates = {
      EUR: {
        USD: 1.08,
        GBP: 0.88,
        JPY: 145.00
      },
      USD: {
        EUR: 0.93,
        GBP: 0.81,
        JPY: 134.00
      },
      GBP: {
        EUR: 1.14,
        USD: 1.23,
        JPY: 165.00
      },
      JPY: {
        EUR: 0.0069,
        USD: 0.0075,
        GBP: 0.0061
      }
    };
    const convertevalore = valore * exchangeRates[currencyFrom][currencyTo];
    document.getElementById("currencyResult").innerHTML = convertevalore+" "+currencyTo;
  }


function conversionMeter() {
    // Get the selected units and amount
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    const valore = parseFloat(document.getElementById("unitAmount").value);
  
    // Define conversion factors
    const conversionFactors = {
      meters: {
        kilometers: 0.001,
        decam: 0.1,
        centimetri: 100,
      },
      kilometers: {
        meters: 1000,
        decam: 100,
        centimetri: 100000
      },
      centimetri: {
        meters: 0.001,
        kilometers: 0.000001,
        decam: 0.001
      },
      decam: {
        meters: 10,
        kilometers: 0.01,
        centimetri: 1000
      }
    };
  
    const convertedAmount = valore * conversionFactors[unitFrom][unitTo];
  
    // Display the result
    document.getElementById("unitResult").innerHTML = convertedAmount+" "+unitTo;
  }