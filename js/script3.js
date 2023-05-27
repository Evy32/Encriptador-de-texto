const invisible = document.getElementById("invisible");

function encriptarDesencriptar(valor) {
    var mensaje = document.getElementById('mensaje').value;
    var resultado = '';

    if (valor) {
        resultado = encriptar(mensaje);
    }
    else {
        resultado = desencriptar(mensaje);
    }
    invisible.classList.remove("hiden");

    document.getElementById('resultado').textContent = resultado;
}

function encriptar(stringE) {

    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringE = stringE.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {

        if (stringE.includes(matriz[i][0])) {
            stringE = stringE.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringE;
}
function desencriptar(stringE) {

    let matriz = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringE = stringE.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {

        if (stringE.includes(matriz[i][0])) {
            stringE = stringE.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringE;
}