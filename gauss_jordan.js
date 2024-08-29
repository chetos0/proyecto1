// Funcion principal

function calcularGaussJordan() {
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
    document.getElementById('matrizPaso').innerHTML = '';

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
            
    // Limpiar los pasos anteriores
    document.getElementById('matrizPaso').innerHTML = '';
    document.getElementById('matrizResultante').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    mostrarMatriz(matriz, b);                   // Mostrar la matriz inicial
    let resultado = GaussJordan(matriz, b);     //Llamada a la funcion GaussJordan
    mostrarResultado(matriz, resultado);
}

function GaussJordan(matriz, b) {
    let n = matriz.length;
    
    for (let k = 0; k < n; k++) {           //Encuentre la fila con el valor absoluto más grande en la columna actual
        let mayor = Math.abs(matriz[k][k]);   // El valor absoluto del elemento más grande en la columna actual
        let index = k;                          //El índice de fila del elemento más grande en la columna actual

        for (let i = k + 1; i < n; i++) {
            if (mayor < Math.abs(matriz[i][k])) {
                mayor = Math.abs(matriz[i][k]);
                index = i;
            }
        }
             // Intercambiar filas si es necesario
        if (k != index) {
            for (let i = 0; i < n; i++) {
                let aux = matriz[k][i];                 // Variable temporal utilizada para intercambiar filas
                matriz[k][i] = matriz[index][i];
                matriz[index][i] = aux;
            }
            let auxB = b[k];              //Variable temporal utilizada para intercambiar elementos de la matriz b
            b[k] = b[index];
            b[index] = auxB;
        }
            // Verificar si la fila es 0
        if (matriz[k][k] == 0) {
            return 'No tiene solución';
        } else {

                //Realizar operaciones de fila para eliminar la variable
            for (let i = 0; i < n; i++) {
                if (i != k) {
                    let pivote = -matriz[i][k];         //Variable temporal utilizada para operaciones de fila
                    for (let j = k; j < n; j++) {
                        matriz[i][j] = matriz[i][j] + pivote * matriz[k][j] / matriz[k][k];
                    }
                    b[i] = b[i] + pivote * b[k] / matriz[k][k];
                } else {
                    let pivote = matriz[k][k];
                    for (let j = k; j < n; j++) {
                        matriz[i][j] = matriz[i][j] / pivote;
                    }
                    b[i] = b[i] / pivote;
                }
            }
        }

        // Mostrar la matriz después de cada iteración
        mostrarMatriz(matriz, b);
    }

    return b;
}

function mostrarMatriz(matriz, b) {
    let n = matriz.length;
    let matrizHTML = '<h3>Matriz en el Paso Actual:</h3><table border="1" style="border-collapse: collapse; width: 100%; margin: auto;">';
    
    for (let i = 0; i < n; i++) {
        matrizHTML += '<tr>';
        for (let j = 0; j < matriz[i].length; j++) {
            matrizHTML += `<td style="padding: 10px; text-align: center;">${matriz[i][j].toFixed(2)}</td>`;
        }
        matrizHTML += `<td style="padding: 10px; text-align: center;">| ${b[i].toFixed(2)}</td>`;
        matrizHTML += '</tr>';
    }
    matrizHTML += '</table><br/>';

    // Agregar la matriz actual a la sección de pasos
    document.getElementById('matrizPaso').innerHTML += matrizHTML;
}

function mostrarResultado(matriz, resultado) {
    if (typeof resultado === 'string') {
        document.getElementById('resultado').innerHTML = `<p>${resultado}</p>`;
        document.getElementById('matrizResultante').innerHTML = '';
        return;
    }

    // Mostrar la matriz final
    let matrizFinalHTML = '<h3>Matriz Final:</h3><table border="1" style="border-collapse: collapse; width: 100%; margin: auto;">';
    
    for (let i = 0; i < matriz.length; i++) {
        matrizFinalHTML += '<tr>';
        for (let j = 0; j < matriz[i].length; j++) {
            matrizFinalHTML += `<td style="padding: 10px; text-align: center;">${matriz[i][j].toFixed(2)}</td>`;
        }
        matrizFinalHTML += `<td style="padding: 10px; text-align: center;">| ${resultado[i].toFixed(2)}</td>`;
        matrizFinalHTML += '</tr>';
    }
    matrizFinalHTML += '</table>';

    document.getElementById('matrizResultante').innerHTML = matrizFinalHTML;

    // Mostrar el resultado final
    let resultadoHTML = `<h3>Resultado Final:</h3>`;
    resultadoHTML += `x = ${resultado[0].toFixed(2)}, y = ${resultado[1].toFixed(2)}, z = ${resultado[2].toFixed(2)}`;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}
