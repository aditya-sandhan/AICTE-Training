
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (Number(celsius) * 9/5) + 32;
    return fahrenheit;
}

function convert() {
    var input = document.getElementById("celsius").value;
    if (input === '') {
        document.getElementById("result").innerText = 'Please enter a value';
        return;
    }
    var c = Number(input);
    if (isNaN(c)) {
        document.getElementById("result").innerText = 'Invalid number';
        return;
    }
    var f = celsiusToFahrenheit(c);
    document.getElementById("result").innerText = f.toFixed(2) + ' °F';
}
