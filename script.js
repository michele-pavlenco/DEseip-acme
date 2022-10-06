// alert('ciao')

// Tra i 15.000 e i 500.000 euro, la percentuale di fee è dello 0.7 % ANNUALE.
// Tra i 500.000 e i 1.000.000 euro, la percentuale di fee è dello 0.6 % ANNUALE.
// Tra i 1.000.000 e i 5.000.000 euro, la percentuale di fee è dello 0.5 % ANNUALE.
// Tra i 5.000.000 e i 10.000.000 euro, la percentuale di fee è dello 0.4 % ANNUALE.
// Oltre i 10.000.000 di euro, la percentuale di fee è dello 0.3 % ANNUALE.
let result = document.getElementById("result")

function multiplyBy() {
    firstNumber = document.getElementById("firstNumber").value;
    if (firstNumber < 15000) {
        // console.log("firstNumber")
        result.innerHTML = "Il minimo è 15.000"
    } else if (firstNumber >= 15000 && firstNumber < 500000) {
        let calculation = firstNumber * 0.7 / 100
        result.innerHTML = Math.floor(calculation / 12)
        console.log(calculation)
    } else if (firstNumber >= 500000 && firstNumber < 1000000) {
        let calculation = ((firstNumber - 500000) * 0.6 / 100) + ((500000 * 0.7) / 100)
        result.innerHTML = Math.floor(calculation / 12)
        console.log(calculation)
    } else if (firstNumber >= 1000000 && firstNumber < 5000000) {
        let calculation = ((firstNumber - 1000000) * 0.5 / 100) + (500000 * 0.6 / 100) + ((500000 * 0.7) / 100)
        result.innerHTML = Math.floor(calculation / 12)
        console.log(calculation)
    } else if (firstNumber >= 5000000 && firstNumber < 10000000) {
        let calculation = ((firstNumber - 5000000) * 0.4 / 100) + (4000000 * 0.5 / 100) + (500000 * 0.6 / 100) + ((500000 * 0.7) / 100)
        result.innerHTML = Math.floor(calculation / 12)
        console.log(calculation)
    } else if (firstNumber >= 10000000) {
        let calculation = ((firstNumber - 10000000) * 0.3 / 100) + (5000000 * 0.4 / 100) + (4000000 * 0.5 / 100) + (500000 * 0.6 / 100) + ((500000 * 0.7) / 100)
        result.innerHTML = Math.floor(calculation / 12)
        console.log(calculation)
    }




}
function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

