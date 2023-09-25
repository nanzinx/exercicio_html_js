const form = document.getElementById("form-number");

form.addEventListener("submit", function(e) {
    e.preventDefault();


var a = document.getElementById('number-a')
var b = document.getElementById('number-b')
var na = parseInt(a.value);
var nb = parseInt(b.value);

    if (nb>na) {
        alert ('Está tudo certo, seu número B é maior que o A')
    } else {
        alert ('Seu número B precisa ser maior que seu número A')
    }
})
