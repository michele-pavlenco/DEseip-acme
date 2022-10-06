// alert('ciao')

// Tra i 15.000 e i 500.000 euro, la percentuale di fee è dello 0.7 % ANNUALE.
// Tra i 500.000 e i 1.000.000 euro, la percentuale di fee è dello 0.6 % ANNUALE.
// Tra i 1.000.000 e i 5.000.000 euro, la percentuale di fee è dello 0.5 % ANNUALE.
// Tra i 5.000.000 e i 10.000.000 euro, la percentuale di fee è dello 0.4 % ANNUALE.
// Oltre i 10.000.000 di euro, la percentuale di fee è dello 0.3 % ANNUALE.
let result = document.getElementById("result")
let popup = document.getElementById("myPopup")
let subscribeMessage = document.getElementById("message")

function multiplyBy() {
    firstNumber = document.getElementById("firstNumber").value;
    if (firstNumber < 15000) {
        // console.log("firstNumber")
        result.innerHTML = "Il minimo è 15.000"
    } else if (firstNumber >= 15000 && firstNumber < 500000) {
        let calculation = firstNumber * 0.7 / 100
        result.innerHTML = Math.floor(calculation / 12)
        message()
        // console.log(calculation)
    } else if (firstNumber >= 500000 && firstNumber < 1000000) {
        let calculation = ((firstNumber - 500000) * 0.6 / 100) + ((500000 * 0.7) / 100)
        result.innerHTML = Math.floor(calculation / 12)
        message()
        // console.log(calculation)
    } else if (firstNumber >= 1000000 && firstNumber < 5000000) {
        let calculation = ((firstNumber - 1000000) * 0.5 / 100) + (500000 * 0.6 / 100) + ((500000 * 0.7) / 100)
        result.innerHTML = Math.floor(calculation / 12)
        message()
        // console.log(calculation)
    } else if (firstNumber >= 5000000 && firstNumber < 10000000) {
        let calculation = ((firstNumber - 5000000) * 0.4 / 100) + (4000000 * 0.5 / 100) + (500000 * 0.6 / 100) + ((500000 * 0.7) / 100)
        result.innerHTML = Math.floor(calculation / 12)
        message()
        // console.log(calculation)
    } else if (firstNumber >= 10000000) {
        let calculation = ((firstNumber - 10000000) * 0.3 / 100) + (5000000 * 0.4 / 100) + (4000000 * 0.5 / 100) + (500000 * 0.6 / 100) + ((500000 * 0.7) / 100)
        result.innerHTML = Math.floor(calculation / 12)
        message()
        // console.log(calculation)
    }
}
function myFunction() {
    popup.classList.toggle("show")
}
function message() {
    console.log("message")
    subscribeMessage.innerHTML = ' <div><p>Prova il servizio di custodia Acme Corp: non potrai più farne a meno.</p><button class="btnlight">Parla con noi </button><button>Apri un conto</button></div>'
    // message.innerHTML = "<div> <button>Parla con noi</button><button>Apri un conto</button></div>"
    // /document.getElementById("message").innerHTML = "Prova il servizio di custodia Acme Corp: non potrai più farne a meno."
}

