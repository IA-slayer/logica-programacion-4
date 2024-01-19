//function celsiusFahrenheit(celsius) {
//    return (celsius * 9/5 ) + 32;
//}

//function celsiusKelvin(celsius) {
//    return celsius + 273.15;
//}

//function factorial(num) {
//    if (num === 0 || num === 1) {
//      return 1;
//    } else {
//      return num * factorial(num - 1);
//    }
//  }

function fibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibSeries = [0, 1];
    while (fibSeries.length < n) {
      fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
    }
    return fibSeries;
  }
}

function conversor() {
    let numFibo = parseInt(document.getElementById("fiboInput").value);

    if (!isNaN(numFibo) && numFibo > 0) {
        let serieFibo = fibonacci(numFibo).join(`, `);
        //let tempKelvin = celsiusKelvin(tempCelsius).toFixed(2);

        let resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = "<p>" + " Los primeros " + numFibo + " digitos de la serie de Fibonacci es : " + serieFibo + "</p>";
        //resultadosDiv.innerHTML += "<p>" + tempCelsius + " grados Celsius son " + tempKelvin + " Kelvin.</p>";
        

    } else {
        alert("Error, por favor ingrese un número natural ya que el programa solo acepta números naturales como entradas.");
    }
}