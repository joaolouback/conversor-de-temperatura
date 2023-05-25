
function converterTemperatura() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var opcaoOrigem = document.getElementById("origem").value;
    var opcaoDestino = document.getElementById("destino").value;
    var resultado = document.getElementById("resultado");
    var body = document.getElementsByTagName("body")[0];

    var tempConvertidafahrenheit;
    var tempConvertidacelsius;
    var tempConvertidakelvin;

    if (opcaoOrigem === "celsius" && opcaoDestino === "fahrenheit") {
        tempConvertidafahrenheit = (temperatura * 9/5) + 32;
        tempConvertidafahrenheit = tempConvertidafahrenheit.toFixed(2);
        resultado.innerHTML = temperatura + " graus Celsius equivalem a " + tempConvertidafahrenheit + " graus Fahrenheit.";
    } else if (opcaoOrigem === "fahrenheit" && opcaoDestino === "celsius") {
        tempConvertidacelsius = (temperatura - 32) * 5/9;
        tempConvertidacelsius = tempConvertidacelsius.toFixed(2);
        resultado.innerHTML = temperatura + " graus Fahrenheit equivalem a " + tempConvertidacelsius + " graus Celsius.";
    } else if (opcaoOrigem === "celsius" && opcaoDestino === "kelvin") {
        tempConvertidakelvin = temperatura + 273.15;
        tempConvertidakelvin = tempConvertidakelvin.toFixed(2);
        resultado.innerHTML = temperatura + " graus Celsius equivalem a " + tempConvertidakelvin + " Kelvin.";
    } else if (opcaoOrigem === "kelvin" && opcaoDestino === "celsius") {
        tempConvertidacelsius = temperatura - 273.15;
        tempConvertidacelsius = tempConvertidacelsius.toFixed(2);
        resultado.innerHTML = temperatura + " Kelvin equivalem a " + tempConvertidacelsius + " graus Celsius.";
    } else if (opcaoOrigem === "fahrenheit" && opcaoDestino === "kelvin") {
        tempConvertidakelvin = (temperatura - 32) * 5/9 + 273.15;
        tempConvertidakelvin = tempConvertidakelvin.toFixed(2);
        resultado.innerHTML = temperatura + " graus Fahrenheit equivalem a " + tempConvertidakelvin + " Kelvin.";
    } else if (opcaoOrigem === "kelvin" && opcaoDestino === "fahrenheit") {
        tempConvertidafahrenheit = (temperatura - 273.15) * 9/5 + 32;
        tempConvertidafahrenheit = tempConvertidafahrenheit.toFixed(2);
        resultado.innerHTML = temperatura + " Kelvin equivalem a " + tempConvertidafahrenheit + " graus Fahrenheit.";
    } else {
        resultado.innerHTML = "Por favor, selecione as unidades corretas de origem e destino.";
        body.style.backgroundColor = "white";
        return;  
    }

    if (opcaoDestino === "celsius") {
        if (tempConvertidacelsius < 0) {
            body.style.backgroundColor = "blue";
        } else if (tempConvertidacelsius >= 0 && tempConvertidacelsius <= 30) {
            body.style.backgroundColor = "orange";
        } else if (tempConvertidacelsius > 30) {
            body.style.backgroundColor = "red";
        } else {
            body.style.backgroundColor = "white";
        }
    } else if (opcaoDestino === "fahrenheit") {
        if (tempConvertidafahrenheit < 50) {
            body.style.backgroundColor = "blue";
        } else if (tempConvertidafahrenheit >= 50 && tempConvertidafahrenheit <= 86) {
            body.style.backgroundColor = "orange";
        } else if (tempConvertidafahrenheit > 86) {
            body.style.backgroundColor = "red";
        } else {
            body.style.backgroundColor = "white";
        }
    } else if (opcaoDestino === "kelvin") {
        if (tempConvertidakelvin < 283.15) {
            body.style.backgroundColor = "blue";
        } else if (tempConvertidakelvin >= 283.15 && tempConvertidakelvin <= 303.15) {
            body.style.backgroundColor = "orange";
        } else if (tempConvertidakelvin > 303.15) {
            body.style.backgroundColor = "red";
        } else {
            body.style.backgroundColor = "white";
        }
    }
}

