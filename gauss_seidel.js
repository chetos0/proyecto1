// Funcion principal
/*
function calcularGaussSeidel() {

    //Obtener los valores de las ecuaciones
    let matriz = [
        [
            parseFloat(document.getElementById('a11').value),
            parseFloat(document.getElementById('a12').value),
            parseFloat(document.getElementById('a13').value)
        ],
        [
            parseFloat(document.getElementById('a21').value),
            parseFloat(document.getElementById('a22').value),
            parseFloat(document.getElementById('a23').value)
        ],
        [
            parseFloat(document.getElementById('a31').value),
            parseFloat(document.getElementById('a32').value),
            parseFloat(document.getElementById('a33').value)
        ]
    ];

    let b = [
        parseFloat(document.getElementById('b1').value),
        parseFloat(document.getElementById('b2').value),
        parseFloat(document.getElementById('b3').value)
    ];

        // Verificar si alguno de los valores ingresados no es un número
        let invalidInput = false;
        matriz.flat().concat(b).forEach(value => {
            if (isNaN(value)) {
                invalidInput = true;
            }
        });
    
        if (invalidInput) {
            // Mostrar un mensaje de error si hay un valor no numérico
            document.querySelector('.error-message').innerHTML = "Por favor, ingrese valores numéricos válidos en todos los campos.";
            return;
        }
    
        // Limpiar el mensaje de error si todo es correcto
        document.querySelector('.error-message').innerHTML = '';

    let x = [0, 0, 0];                              // Valores iniciales
    const tolerancia = 0.0;                         // Tolerancia del 0%
    const maxIteraciones = 10;                       // Mostrar solo 10 iteraciones

    // Limpiar las áreas de resultados antes de realizar los cálculos
    const resultadosFinalesContainer = document.querySelector('.resultados-finales');
    resultadosFinalesContainer.innerHTML = '<h2>Respuesta Final:</h2>';

    const iteracionesContainer = document.querySelector('.iteraciones');
    iteracionesContainer.innerHTML = '<h2>Iteraciones:</h2>';

    // Verificar el tipo de matriz seleccionado por el usuario
    const tipoMatriz = document.getElementById('tipoMatriz').value;

    // Si se selecciona "dominante", transformar la matriz
    if (tipoMatriz === 'dominante') {
        matriz = hacerMatrizDiagonalmenteDominante(matriz,b);
    }

    let a=matriz;
    console.log(a);
    const iteraciones = gaussSeidel(matriz, b, x, tolerancia, maxIteraciones); // Llamada de la función gaussSeidel

    // Mostrar los resultados finales en la página
    const resultadoFinal = document.createElement('div');
    resultadoFinal.innerHTML = `
        <p>X = ${x[0].toFixed(4)}</p>
        <p>Y = ${x[1].toFixed(4)}</p>
        <p>Z = ${x[2].toFixed(4)}</p>
        
    `;
    resultadosFinalesContainer.appendChild(resultadoFinal);

    // Mostrar las iteraciones realizadas en la página
    iteraciones.forEach((iteracion, index) => {
        let iteracionElemento = document.createElement('div');
        iteracionElemento.classList.add('iteracion-item');
        iteracionElemento.innerHTML = `
            
            <p>Iteración ${index + 1}:</p>
            <p>X = ${iteracion[0].toFixed(4)}</p>
            <p>Y = ${iteracion[1].toFixed(4)}</p>
            <p>Z = ${iteracion[2].toFixed(4)}</p>
            <p>Error X = ${iteracion[3][0].toFixed(4)}%</p>
            <p>Error Y = ${iteracion[3][1].toFixed(4)}%</p>
            <p>Error Z = ${iteracion[3][2].toFixed(4)}%</p>
        `;
        iteracionesContainer.appendChild(iteracionElemento);
    });
}

function calcularError(actual, anterior) {
    if (actual === 0) return 0;                      // Evita la división por cero
    return Math.abs((actual - anterior) / actual) * 100;
}

function gaussSeidel(matriz, b, x, tolerancia, maxIteraciones) {
    let x_prev = [...x];                             // Para almacenar los valores anteriores de x
    let error = new Array(3).fill(0);                // Error de las 3 variables
    let iteraciones = [];                            // Array para almacenar las iteraciones

    for (let iteracion = 0; iteracion < maxIteraciones; iteracion++) {
        for (let i = 0; i < 3; i++) {
            x_prev[i] = x[i];
        }


        // Aplicar el método de Gauss-Seidel
        x[0] = (b[0] - matriz[0][1] * x[1] - matriz[0][2] * x[2]) / matriz[0][0];
        x[1] = (b[1] - matriz[1][0] * x[0] - matriz[1][2] * x[2]) / matriz[1][1];
        x[2] = (b[2] - matriz[2][0] * x[0] - matriz[2][1] * x[1]) / matriz[2][2];

        // Calcular el error para cada variable
        for (let i = 0; i < 3; i++) {
            error[i] = calcularError(x[i], x_prev[i]);
        }

        // Almacenar la iteración actual
        iteraciones.push([x[0], x[1], x[2], [...error]]);

        // Verificar si el error es menor que la tolerancia
        if (error[0] <= tolerancia && error[1] <= tolerancia && error[2] <= tolerancia) {
            break;
        }
    }

    return iteraciones;
}

// Función auxiliar para verificar si una fila es diagonalmente dominante//////////////////////////////
function esDominante(fila, index) {
    let suma = 0;
    for (let j = 0; j < fila.length; j++) {
        if (j !== index) {
            suma += Math.abs(fila[j]);
        }
    }
    return Math.abs(fila[index]) > suma;
}
//Funcion para cambiar la matriz a diagonalmente dominante
function hacerMatrizDiagonalmenteDominante(matriz, b) {
    const size = matriz.length;

    for (let i = 0; i < size; i++) {
        let maxIndex = i;
        let maxValue = Math.abs(matriz[i][i]);

        // Encontrar la fila con el valor absoluto más grande en la columna i
        for (let j = i + 1; j < size; j++) {
            if (Math.abs(matriz[j][i]) > maxValue) {
                maxValue = Math.abs(matriz[j][i]);
                maxIndex = j;
            }
        }
        // Intercambiar filas si es necesario
        if (maxIndex !== i) {
            [matriz[i], matriz[maxIndex]] = [matriz[maxIndex], matriz[i]];
            [b[i], b[maxIndex]] = [b[maxIndex], b[i]];
        }
    }
    return matriz;
}*/
//con convergencia abajo
/*function calcularGaussSeidel() {

    // Obtener los valores de las ecuaciones
    let matriz = [
        [
            parseFloat(document.getElementById('a11').value),
            parseFloat(document.getElementById('a12').value),
            parseFloat(document.getElementById('a13').value)
        ],
        [
            parseFloat(document.getElementById('a21').value),
            parseFloat(document.getElementById('a22').value),
            parseFloat(document.getElementById('a23').value)
        ],
        [
            parseFloat(document.getElementById('a31').value),
            parseFloat(document.getElementById('a32').value),
            parseFloat(document.getElementById('a33').value)
        ]
    ];

    let b = [
        parseFloat(document.getElementById('b1').value),
        parseFloat(document.getElementById('b2').value),
        parseFloat(document.getElementById('b3').value)
    ];

    // Verificar si alguno de los valores ingresados no es un número
    let invalidInput = false;
    matriz.flat().concat(b).forEach(value => {
        if (isNaN(value)) {
            invalidInput = true;
        }
    });

    if (invalidInput) {
        // Mostrar un mensaje de error si hay un valor no numérico
        document.querySelector('.error-message').innerHTML = "Por favor, ingrese valores numéricos válidos en todos los campos.";
        return;
    }

    // Limpiar el mensaje de error si todo es correcto
    document.querySelector('.error-message').innerHTML = '';

    let x = [0, 0, 0];                              // Valores iniciales
    const tolerancia = 0.0;                         // Tolerancia del 0%
    const maxIteraciones = 50;                       // Mostrar solo 10 iteraciones

    // Limpiar las áreas de resultados antes de realizar los cálculos
    const resultadosFinalesContainer = document.querySelector('.resultados-finales');
    resultadosFinalesContainer.innerHTML = '<h2>Resultado:</h2>';

    const iteracionesContainer = document.querySelector('.iteraciones');
    iteracionesContainer.innerHTML = '<h2>Iteraciones:</h2>';

    // Verificar el tipo de matriz seleccionado por el usuario
    const tipoMatriz = document.getElementById('tipoMatriz').value;

    // Si se selecciona "dominante", transformar la matriz
    if (tipoMatriz === 'dominante') {
        matriz = hacerMatrizDiagonalmenteDominante(matriz, b);
    }

    const iteraciones = gaussSeidel(matriz, b, x, tolerancia, maxIteraciones); // Llamada de la función gaussSeidel

    // Mostrar los resultados finales en la página
    if (iteraciones.converge) {
        const resultadoFinal = document.createElement('div');
        resultadoFinal.innerHTML = `
            <p>El método es <strong>convergente</strong>.</p>
            <p>Solución aproximada:</p>
            <p>X = ${x[0].toFixed(4)}</p>
            <p>Y = ${x[1].toFixed(4)}</p>
            <p>Z = ${x[2].toFixed(4)}</p>
        `;
        resultadosFinalesContainer.appendChild(resultadoFinal);
    } else {
        resultadosFinalesContainer.innerHTML += "<p>El método es <strong>divergente</strong>. No converge después de " + maxIteraciones + " iteraciones.</p>";
    }

    // Mostrar las iteraciones realizadas en la página
    iteraciones.resultados.forEach((iteracion, index) => {
        let iteracionElemento = document.createElement('div');
        iteracionElemento.classList.add('iteracion-item');
        iteracionElemento.innerHTML = `
            <p><strong>Iteración</strong> ${index + 1}:</p>
            <p><strong>X</strong> = ${iteracion[0].toFixed(4)}</p>
            <p><strong>Y</strong>  = ${iteracion[1].toFixed(4)}</p>
            <p><strong>Z</strong>  = ${iteracion[2].toFixed(4)}</p>
            <p><strong>Error X</strong>  = ${iteracion[3][0].toFixed(4)}%</p>
            <p><strong>Error Y</strong>  = ${iteracion[3][1].toFixed(4)}%</p>
            <p><strong>Error Z</strong>  = ${iteracion[3][2].toFixed(4)}%</p>
        `;
        iteracionesContainer.appendChild(iteracionElemento);
    });
}
*/
function calcularGaussSeidel() {
    // Obtener los valores de las ecuaciones
    let matriz = [
        [
            parseFloat(document.getElementById('a11').value),
            parseFloat(document.getElementById('a12').value),
            parseFloat(document.getElementById('a13').value)
        ],
        [
            parseFloat(document.getElementById('a21').value),
            parseFloat(document.getElementById('a22').value),
            parseFloat(document.getElementById('a23').value)
        ],
        [
            parseFloat(document.getElementById('a31').value),
            parseFloat(document.getElementById('a32').value),
            parseFloat(document.getElementById('a33').value)
        ]
    ];

    let b = [
        parseFloat(document.getElementById('b1').value),
        parseFloat(document.getElementById('b2').value),
        parseFloat(document.getElementById('b3').value)
    ];

    // Verificar si alguno de los valores ingresados no es un número
    let invalidInput = false;
    matriz.flat().concat(b).forEach(value => {
        if (isNaN(value)) {
            invalidInput = true;
        }
    });

    if (invalidInput) {
        // Mostrar un mensaje de error si hay un valor no numérico
        document.querySelector('.error-message').innerHTML = "Por favor, ingrese valores numéricos válidos en todos los campos.";
        return;
    }

    // Limpiar el mensaje de error si todo es correcto
    document.querySelector('.error-message').innerHTML = '';

    let x = [0, 0, 0];                              // Valores iniciales
    const tolerancia = 0.0;                         // Tolerancia del 0%
    const maxIteraciones = 50;                       // Mostrar solo 10 iteraciones

    // Limpiar las áreas de resultados antes de realizar los cálculos
    const resultadosFinalesContainer = document.querySelector('.resultados-finales');
    resultadosFinalesContainer.innerHTML = '<h2>Resultado:</h2>';

    const iteracionesContainer = document.querySelector('.iteraciones');
    iteracionesContainer.innerHTML = '<h2>Iteraciones:</h2>';

    // Verificar el tipo de matriz seleccionado por el usuario
    const tipoMatriz = document.getElementById('tipoMatriz').value;

    // Si se selecciona "dominante", transformar la matriz
    if (tipoMatriz === 'dominante') {
        matriz = hacerMatrizDiagonalmenteDominante(matriz, b);
    }

    const iteraciones = gaussSeidel(matriz, b, x, tolerancia, maxIteraciones); // Llamada de la función gaussSeidel

    // Mostrar los resultados finales en la página
    if (iteraciones.converge) {
        const resultadoFinal = document.createElement('div');
        resultadoFinal.innerHTML = `
            <p>El método es <strong>convergente</strong>.</p>
            <p>Solución aproximada:</p>
            <p>X = ${x[0].toFixed(4)}</p>
            <p>Y = ${x[1].toFixed(4)}</p>
            <p>Z = ${x[2].toFixed(4)}</p>
        `;
        resultadosFinalesContainer.appendChild(resultadoFinal);
    } else {
        resultadosFinalesContainer.innerHTML += "<p>El método es <strong>divergente</strong>. No converge después de " + maxIteraciones + " iteraciones.</p>";
    }

    // Crear la tabla de iteraciones
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Iteración</th>
                <th>X</th>
                <th>Y</th>
                <th>Z</th>
                <th>Error X (%)</th>
                <th>Error Y (%)</th>
                <th>Error Z (%)</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = table.querySelector('tbody');

    iteraciones.resultados.forEach((iteracion, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${iteracion[0].toFixed(4)}</td>
            <td>${iteracion[1].toFixed(4)}</td>
            <td>${iteracion[2].toFixed(4)}</td>
            <td>${iteracion[3][0].toFixed(4)}%</td>
            <td>${iteracion[3][1].toFixed(4)}%</td>
            <td>${iteracion[3][2].toFixed(4)}%</td>
        `;
        tbody.appendChild(row);
    });

    iteracionesContainer.appendChild(table);
}

function calcularError(actual, anterior) {
    if (actual === 0) return 0;                      // Evita la división por cero
    return Math.abs((actual - anterior) / actual) * 100;
}

function gaussSeidel(matriz, b, x, tolerancia, maxIteraciones) {
    let x_prev = [...x];                             // Para almacenar los valores anteriores de x
    let error = new Array(3).fill(0);                // Error de las 3 variables
    let iteraciones = [];                            // Array para almacenar las iteraciones
    let converge = false;                            // Variable para verificar la convergencia

    for (let iteracion = 0; iteracion < maxIteraciones; iteracion++) {
        for (let i = 0; i < 3; i++) {
            x_prev[i] = x[i];
        }

        // Aplicar el método de Gauss-Seidel
        x[0] = (b[0] - matriz[0][1] * x[1] - matriz[0][2] * x[2]) / matriz[0][0];
        x[1] = (b[1] - matriz[1][0] * x[0] - matriz[1][2] * x[2]) / matriz[1][1];
        x[2] = (b[2] - matriz[2][0] * x[0] - matriz[2][1] * x[1]) / matriz[2][2];

        // Calcular el error para cada variable
        for (let i = 0; i < 3; i++) {
            error[i] = calcularError(x[i], x_prev[i]);
        }

        // Almacenar la iteración actual
        iteraciones.push([x[0], x[1], x[2], [...error]]);

        // Verificar si el error es menor que la tolerancia
        if (error[0] <= tolerancia && error[1] <= tolerancia && error[2] <= tolerancia) {
            converge = true;
            break;
        }
    }

    return { resultados: iteraciones, converge: converge };
}

// Función auxiliar para verificar si una fila es diagonalmente dominante
function esDominante(fila, index) {
    let suma = 0;
    for (let j = 0; j < fila.length; j++) {
        if (j !== index) {
            suma += Math.abs(fila[j]);
        }
    }
    return Math.abs(fila[index]) > suma;
}

// Función para cambiar la matriz a diagonalmente dominante
function hacerMatrizDiagonalmenteDominante(matriz, b) {
    const size = matriz.length;

    for (let i = 0; i < size; i++) {
        let maxIndex = i;
        let maxValue = Math.abs(matriz[i][i]);

        // Encontrar la fila con el valor absoluto más grande en la columna i
        for (let j = i + 1; j < size; j++) {
            if (Math.abs(matriz[j][i]) > maxValue) {
                maxValue = Math.abs(matriz[j][i]);
                maxIndex = j;
            }
        }
        // Intercambiar filas si es necesario
        if (maxIndex !== i) {
            [matriz[i], matriz[maxIndex]] = [matriz[maxIndex], matriz[i]];
            [b[i], b[maxIndex]] = [b[maxIndex], b[i]];
        }
    }
    return matriz;
}


