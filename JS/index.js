
let resultado = document.getElementById('resultado');

let asignar = (valor) => {
    resultado.value += valor;
};

let calcular = () => {
    resultado.value = eval(resultado.value);
};

let limpiar = () => {
    resultado.value = "";
};

let asignarPi = () => {
    var resultado = document.getElementById('resultado');

    resultado.value = Math.PI;
};

let calcularRaizCuadrada = () => {
    var resultado = document.getElementById('resultado');

    var valorResultado = parseFloat(resultado.value);
    var raizCuadrada = Math.sqrt(valorResultado);

    resultado.value = raizCuadrada;
};

let elevarAlCubo = () => {
    var resultado = document.getElementById('resultado');

    var valorResultado = parseFloat(resultado.value);
    var resultadoCubo = Math.pow(valorResultado, 3);

    resultado.value = resultadoCubo;
};

let elevarAlCuadrado = () => {
    var resultado = document.getElementById('resultado');

    var valorResultado = parseFloat(resultado.value);
    var resultadoCubo = Math.pow(valorResultado, 2);

    resultado.value = resultadoCubo;
};