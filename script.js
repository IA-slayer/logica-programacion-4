//function celsiusFahrenheit(celsius) {
//    return (celsius * 9/5 ) + 32;
//}

//function celsiusKelvin(celsius) {
//    return celsius + 273.15;
//}

function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

function conversor() {
    let numfact = parseInt(document.getElementById("factInput").value);

    if (!isNaN(numfact)) {
        let fact = factorial(numfact).toFixed(2);
        //let tempKelvin = celsiusKelvin(tempCelsius).toFixed(2);

        let resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = "<p>" + " El factorial de " + numfact + " es " + fact + "</p>";
        //resultadosDiv.innerHTML += "<p>" + tempCelsius + " grados Celsius son " + tempKelvin + " Kelvin.</p>";

    } else {
        alert("Error, por favor ingrese un número ya que el conversor solo acepta números como entradas.");
    }
}