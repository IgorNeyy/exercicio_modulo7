const form = document.getElementById('form-deposito');

function validaNome(nomeBeneficiario) {
    const nomeComoArray = nomeBeneficiario.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficirio = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso =  `Montante de: $(valorDeposito.value) depositado para o cliente: $(nomeBeneficiario.value) - conta $(numeroContaBeneficiario.value)`;
    

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        alert(mensagemSucesso);
    } else {
        alert("o nome nao esta completo")
    }
})    

console.log(form)
