const form = document.getElementById("form-number");

function validaNumero(numeroMenor) {
    const numeroComoArray = numeroMenor;
    return numeroComoArray.length <= 1;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const NumeroA = document.getElementById ('number-a');
    if (!validaNumero(NumeroA.value))
})