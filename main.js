const form = document.getElementById("form-number");
let formEValido = false;

function validaNumero(NumeroA) {
    if (NumeroA >= NumeroB) {
    return false;
    } else {
    return true;
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const NumeroA = document.getElementById ('number-a');
    const NumeroB = document.getElementById ('number-b');
    const mensagemSucesso = `Está tudo certo, o numero B é maior que o numero A`;

    formEValido = validaNumero(NumeroA.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        NumeroA.value = "";
        NumeroB.value = "";
    } else {
        NumeroA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

NumeroA.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if (!formEValido) {
        NumeroA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        NumeroA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})
