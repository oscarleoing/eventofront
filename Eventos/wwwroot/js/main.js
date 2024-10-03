

// Variables Globales
let selectedSeatIds = []; // Para el primer escenario
//let selectedSeatIdsDos = []; // Para el segundo escenario
//const ticketPrice = 10;

//let infoAsiento = null;

// Matrices y variables para la disposición de los asientos en ambos escenarios
var matrizPAR = Array.from({ length: 26 }, (_, i) => i * 2);
var matrizNONES = Array.from({ length: 25 }, (_, i) => i * 2 + 1);
/*
var matrizPAR = new Array(); 
var posicion = 0;
 for (var i=0; i<=49; i=i+2)
 {
    matrizPAR[posicion] = i;
     posicion++;
 }
 console.log(matrizPAR);

var matrizNONES = new Array();

i = 1;
posicion = 0;
while(i <= 50){
if (i % 2 == 1) {
matrizNONES[posicion] = i;
posicion++;
}
i++; 
}
console.log(matrizNONES);


*/
console.log(matrizPAR);
console.log(matrizNONES);



// Ordenar matrizNONES en orden descendente



// Matriz para el primer escenario (Escenario Principal)

// Definición de las filas



var matrizFila = new Array();

for (let x = 0; x <= 24; x++) {
    matrizFila[x] = new Array();
    for (let y = 0; y <= 51; y++) {
        //  matrizFila [x][y] = x + "" + y;
    }
}

matrizFila[0][0] = "A";
matrizFila[1][0] = "B";
matrizFila[2][0] = "C";
matrizFila[3][0] = "D";
matrizFila[4][0] = "E";
matrizFila[5][0] = "F";
matrizFila[6][0] = "G";
matrizFila[7][0] = "H";
matrizFila[8][0] = "I";
matrizFila[9][0] = "J";
matrizFila[10][0] = "K";
matrizFila[11][0] = "L";
matrizFila[12][0] = "M";
matrizFila[13][0] = "N";
matrizFila[14][0] = "Ñ";
matrizFila[15][0] = "O";
matrizFila[16][0] = "P";
matrizFila[17][0] = "Q";
matrizFila[18][0] = "R";
matrizFila[19][0] = "S";
matrizFila[20][0] = "T";
matrizFila[21][0] = "U";
matrizFila[22][0] = "V";
matrizFila[23][0] = "W";
matrizFila[24][0] = "";
//
matrizFila[0][50] = "A";
matrizFila[1][50] = "B";
matrizFila[2][50] = "C";
matrizFila[3][50] = "D";
matrizFila[4][50] = "E";
matrizFila[5][50] = "F";
matrizFila[6][50] = "G";
matrizFila[7][50] = "H";
matrizFila[8][50] = "I";
matrizFila[9][50] = "J";
matrizFila[10][50] = "K";
matrizFila[11][50] = "L";
matrizFila[12][50] = "M";
matrizFila[13][50] = "N";
matrizFila[14][50] = "Ñ";
matrizFila[15][50] = "O";
matrizFila[16][50] = "P";
matrizFila[17][50] = "Q";
matrizFila[18][50] = "R";
matrizFila[19][50] = "S";
matrizFila[20][50] = "T";
matrizFila[21][50] = "U";
matrizFila[22][50] = "V";
matrizFila[23][50] = "W";
matrizFila[24][50] = "";


var filasPrimero = new Array();

var filasPrimero =
    [[14, 13],//28 a 27
    [16, 15],// 32 b 29
    [17, 16],// 34 c 31
    [19, 17],// 38 d 35
    [21, 19],// 42 e 39
    [22, 21],// 44 f 43
    [22, 21],// 44 g 43
    [22, 20],// 44 h 41
    [22, 20],// 44 i 41
    [23, 21],// 46 j 43
    [23, 21],// 46 k 43
    [23, 22],// 46 l 45
    [23, 22],// 46 m 45
    [23, 22],// 46 n 45 
    [24, 22],// 48 ñ 45
    [24, 23],// 48 o 47 
    [22, 21],// 44 p 43
    [22, 22],// 44 q 45
    [24, 24],// 48 r 49
    [22, 22],// 44 s 45
    [22, 22],// 44 t 45
    [23, 23],// 46 u 47
    [22, 22],// 44 v 45
    [23, 22],//44 w 45
    [24, 24]];//44 numeros 45
var a = 0, b = 1;
var x = 0;
var c = 0;
var z = 0;

while (z <= 24) {
    posicion = 25;
    for (i = 0; i <= filasPrimero[x][a]; i++) {
        matrizFila[z][posicion] = matrizFila[c][0] + matrizPAR[i];
        posicion++;
    }

    while (i <= 25) {
        //matrizFila[z][posicion] = " ";
        posicion++;
        i++;
    }
    z++;
    c++;
    x++;
}

//
var x = 0;
var c = 0;
var z = 0;
while (z <= 24) {
    posicion = 25;
    for (var i = 0; i <= filasPrimero[x][b]; i++) {
        matrizFila[z][posicion] = matrizFila[c][0] + matrizNONES[i];
        posicion--;
    }
    while (i <= 25) {
        //matrizFila[z][posicion] = " ";
        posicion--;
        i++;
    }
    z++;
    c++;
    x++;
}


matrizFila[23][21] = null;
matrizFila[23][22] = null;
matrizFila[23][23] = null;
matrizFila[23][24] = null;
matrizFila[23][25] = null;
matrizFila[23][25] = null;
matrizFila[23][26] = null;
matrizFila[23][27] = null;
matrizFila[23][28] = null;
matrizFila[23][29] = null;
matrizFila[23][30] = null;
matrizFila[23][31] = null;


/*
// Llenar las matrices con los valores correspondientes
function llenarMatriz(matriz, filas) {
    filas.forEach(([letra, pares, nones], i) => {
        matriz[i][0] = letra;
        matriz[i][matriz[0].length - 1] = letra;

        for (let j = 0; j <= pares; j++) {
            matriz[i][25 + j] = letra + matrizPAR[j];
        }
        for (let j = 0; j <= nones; j++) {
            matriz[i][24 - j] = letra + matrizNONES[j];
        }
    });
}

//llenarMatriz(matrizFila, filasPrimero);
llenarMatriz(matrizFilaDOS, filasSegundo);

console.log(matrizFila);
console.log(matrizFilaDOS);

*/

var matrizFilaDOS = new Array();

for (let x = 0; x <= 11; x++) {
    matrizFilaDOS[x] = new Array();
    for (let y = 0; y <= 48; y++) {
        //  matrizFilaDOS [x][y] = x + "" + y;
    }
}

console.log(matrizFilaDOS);

matrizFilaDOS[0][0] = "AA";
matrizFilaDOS[1][0] = "BB";
matrizFilaDOS[2][0] = "CC";
matrizFilaDOS[3][0] = "DD";
matrizFilaDOS[4][0] = "EE";
matrizFilaDOS[5][0] = "FF";
matrizFilaDOS[6][0] = "GG";
matrizFilaDOS[7][0] = "HH";
matrizFilaDOS[8][0] = "II";
matrizFilaDOS[9][0] = "JJ";
matrizFilaDOS[10][0] = "KK";
matrizFilaDOS[11][0] = "";
//
matrizFilaDOS[0][48] = "AA";
matrizFilaDOS[1][48] = "BB";
matrizFilaDOS[2][48] = "CC";
matrizFilaDOS[3][48] = "DD";
matrizFilaDOS[4][48] = "EE";
matrizFilaDOS[5][48] = "FF";
matrizFilaDOS[6][48] = "GG";
matrizFilaDOS[7][48] = "HH";
matrizFilaDOS[8][48] = "II";
matrizFilaDOS[9][48] = "JJ";
matrizFilaDOS[10][48] = "KK";
matrizFilaDOS[11][48] = "";
console.log(matrizFilaDOS);


var filasSegundo = new Array();

var filasSegundo =
    [[19, 19],//38 aa 39
    [20, 19],// 40 bb 39
    [21, 20],// 42 cc 41
    [21, 21],// 42 dd 43
    [22, 21],// 42 ee 43
    [22, 21],// 44 ff 43
    [22, 21],// 44 gg 43
    [22, 22],// 44 hh 45
    [19, 19],// 38 ii 39
    [19, 18],// 38 jj 37
    [20, 20],// 40 kk 41
    [22, 22],//  numeros 
    ];//44 w 45
var a = 0, b = 1;

var x = 0;
var c = 0;
var z = 0;

while (z <= 11) {
    posicion = 25;
    for (i = 0; i <= filasSegundo[x][a]; i++) {
        matrizFilaDOS[z][posicion] = matrizFilaDOS[c][0] + matrizPAR[i];
        posicion++;
    }
    console.log("no entro" + i);
    while (i <= 12) {
        matrizFilaDOS[z][posicion] = " ";
        posicion++;
        i++;
    }
    z++;
    c++;
    x++;
}

//
var x = 0;
var c = 0;
var z = 0;
while (z <= 11) {
    posicion = 25;
    for (var i = 0; i <= filasSegundo[x][b]; i++) {
        matrizFilaDOS[z][posicion] = matrizFilaDOS[c][0] + matrizNONES[i];
        posicion--;
    }
    while (i <= 12) {
        matrizFilaDOS[z][posicion] = " ";
        posicion--;
        i++;
    }
    z++;
    c++;
    x++;
}


var matriz = new Array();

let asientosCache = []; // Variable global para almacenar los asientos



// Crear los asientos para los escenarios
function createSeats(rows, cols, matriz, containerId, verificarDisponibilidadAsiento, filaNumerica) {
    const seatingContainer = document.getElementById(containerId);
    let filaConPuerta = 0; // Contador para insertar la puerta cada 6 filas
    let filapnombre = 0;
    let numeroPuerta = 0;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        if (!matriz[i]) {
            console.error(`Error: La fila ${i} no existe en la matriz.`);
            continue; // Saltar esta iteración si la fila no existe
        }

        for (let j = 0; j < cols; j++) {
            let seat;

            if (i === filaNumerica) {
                seat = document.createElement('div');
                seat.classList.add('seat-fila');
                seat.textContent = matriz[i][j]; // Asigna el número del asiento en la última fila
            } else if (matriz[i][j] == null) {
                seat = document.createElement('div');
                seat.classList.add('seat-rest');
            } else if (j === 0 || j === cols - 2) {
                seat = document.createElement('div');
                seat.classList.add('seat-fila');
                seat.textContent = matriz[i][j];
            } else {
                seat = document.createElement('div');
                seat.classList.add('seat');
                seat.setAttribute('data-seat-number', matriz[i][j]);


                // Cambiar el color del fondo de los asientos según la fila o la columna
                if (i <= 14) {
                    seat.style.backgroundColor = 'rgb(231, 231, 86)'; // Zona 1: primeras filas
                } else {
                    seat.style.backgroundColor = 'lightgreen'; // Zona 2: filas del medio
                }
                verificarDisponibilidadAsiento(matriz[i][j], seat);
            }

            row.appendChild(seat);
        }

        // Añadir una puerta cada 6 filas
        if (filaConPuerta <= 2) {
            const rightDoor = document.createElement('div');
            rightDoor.classList.add('seat-p');
            row.appendChild(rightDoor); // Añadir la puerta al final de la fila
        } else if (filaConPuerta === 3) {
            if (numeroPuerta > 5) {
                const rightDoor = document.createElement('div');
                rightDoor.classList.add('seat-p');
                row.appendChild(rightDoor); // Añadir la puerta al final de la fila
                filaConPuerta = 0;
            }
            else {
                const rightDoor = document.createElement('div');
                rightDoor.classList.add('seat-puerta');
                rightDoor.innerHTML = '<i class="bi bi-box-arrow-right"></i>' + "Puerta " + numeroPuerta;
                row.appendChild(rightDoor); // Añadir la puerta al final de la fila
                filaConPuerta = 0; // Reiniciar contador
                numeroPuerta++;
            }
        }

        seatingContainer.appendChild(row);
        filaConPuerta++;
        filapnombre++;
    }
}

function createSeatsDos(rows, cols, matriz, containerId, verificarDisponibilidadAsiento, filaNumerica) {
    const seatingContainer = document.getElementById(containerId);
    let filaConPuerta = 0; // Contador para insertar la puerta cada 6 filas
    let filapnombre = 0;
    let numeroPuerta = 1;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        if (!matriz[i]) {
            console.error(`Error: La fila ${i} no existe en la matriz.`);
            continue; // Saltar esta iteración si la fila no existe
        }

        for (let j = 0; j < cols; j++) {
            let seat;

            if (i === filaNumerica) {
                seat = document.createElement('div');
                seat.classList.add('seat-fila');
                seat.textContent = matriz[i][j]; // Asigna el número del asiento en la última fila
            } else if (matriz[i][j] == null) {
                seat = document.createElement('div');
                seat.classList.add('seat-rest');
            } else if (j === 0 || j === cols - 2) {
                seat = document.createElement('div');
                seat.classList.add('seat-fila');
                seat.textContent = matriz[i][j];
            } else {
                seat = document.createElement('div');
                seat.classList.add('seat');
                seat.setAttribute('data-seat-number', matriz[i][j]);


                // Cambiar el color del fondo de los asientos según la fila o la columna
                if (i <= 5) {
                    seat.style.backgroundColor = '#0099FF'; // Zona 1: primeras filas
                } else {
                    seat.style.backgroundColor = '#8c4ed9'; // Zona 2: filas del medio
                }
                verificarDisponibilidadAsiento(matriz[i][j], seat);
            }

            row.appendChild(seat);
        }

        // Añadir una puerta cada 6 filas
        if (filaConPuerta <= 2) {
            const rightDoor = document.createElement('div');
            rightDoor.classList.add('seat-p');
            row.appendChild(rightDoor); // Añadir la puerta al final de la fila
        } else if (filaConPuerta === 3) {
            if (numeroPuerta > 5) {
                const rightDoor = document.createElement('div');
                rightDoor.classList.add('seat-p');
                row.appendChild(rightDoor); // Añadir la puerta al final de la fila
                filaConPuerta = 0;
            }
            else {
                const rightDoor = document.createElement('div');
                rightDoor.classList.add('seat-puerta');
                rightDoor.innerHTML = '<i class="bi bi-box-arrow-right"></i>' + "Puerta " + numeroPuerta;
                row.appendChild(rightDoor); // Añadir la puerta al final de la fila
                filaConPuerta = 0; // Reiniciar contador
                numeroPuerta++;
            }
        }

        seatingContainer.appendChild(row);
        filaConPuerta++;
        filapnombre++;
    }
}


// Función para verificar la disponibilidad de un asiento cargado en asientosCache
function verificarDisponibilidadAsiento(numeroAsiento, seatElement) {
    //  console.log("Buscando el asiento:", numeroAsiento);
    //  console.log("Contenido de asientosCache:", asientosCache);

    // Iterar por cada asiento en asientosCache
    asientosCache.forEach(asiento => {
        // Asegúrate de que el asiento tiene la propiedad "numeroAsiento"
        if (asiento.numeroAsiento.toString() === numeroAsiento.toString()) {
            //    console.log(`Asiento ${numeroAsiento} encontrado:`, asiento);

            // Verificar si el asiento está disponible
            if (asiento.disponible) {
                seatElement.classList.remove('occupied');
                seatElement.classList.add('available');
            } else {
                seatElement.classList.remove('available');
                seatElement.classList.add('occupied');
            }

            // Manejar la selección del asiento si está disponible
            manejarDisponibilidadAsiento(asiento, seatElement, selectedSeatIds, updateSelectedCount, updateSelectedlist);
        }
    });

    // Si no se encuentra el asiento
    if (!asientosCache.some(asiento => asiento.numeroAsiento.toString() === numeroAsiento.toString())) {
        console.error(`Error: La información del asiento con número ${numeroAsiento} no se encontró o es inválida.`);
        seatElement.classList.add('error');
    }
}


// Manejar la disponibilidad y selección de asientos
function manejarDisponibilidadAsiento(infoAsiento, seatElement, selectedSeatIds, updateSelectedCount, updateSelectedlist) {
    if (infoAsiento && typeof infoAsiento === 'object') {
        const LunetaA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ"]; // Filas que serán lightblue
        const LunetB = ["O", "P", "Q", "R", "S", "T", "P", "Q", "R", "U", "V", "W"]; // Filas que serán lightcoral
        const PrimerPisoA = ["AA", "BB", "CC", "DD", "EE", "FF"]; // Filas que serán lightblue
        const PrimerPisoB = ["GG", "HH", "II", "JJ", "KK"]; // Filas que serán lightblue

        const disponible = infoAsiento.disponible;

        // Marcar asientos ocupados y evitar que se oculten
        if (disponible === false) {
            seatElement.classList.add('occupied');
            seatElement.style.backgroundColor = 'lightcoral'; // Color especial para asientos ocupados
        } else if (disponible === true) {
            seatElement.addEventListener('click', () => {
                seatElement.classList.toggle('selected');

                // Cambiar el color de los asientos seleccionados a blanco
                if (seatElement.classList.contains('selected')) {
                    seatElement.style.backgroundColor = 'white';
                    selectedSeatIds.push(infoAsiento.idAsiento);
                } else {
                    // Restaurar el color de la zona al deseleccionar
                    if (LunetaA.includes(infoAsiento.fila)) {
                        seatElement.style.backgroundColor = 'rgb(231, 231, 86)';
                    } else if (LunetB.includes(infoAsiento.fila)) {
                        seatElement.style.backgroundColor = 'lightgreen';
                    }
                    else if (PrimerPisoA.includes(infoAsiento.fila)) {
                        seatElement.style.backgroundColor = '#0099FF';
                    }
                    else if (PrimerPisoB.includes(infoAsiento.fila)) {
                        seatElement.style.backgroundColor = '#8c4ed9';
                    }


                }

                updateSelectedCount();
                updateSelectedlist();
            });
        }

        // Tooltip para mostrar información del asiento
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.style.visibility = 'hidden';
        document.body.appendChild(tooltip);

        seatElement.addEventListener('mouseover', (event) => {
            tooltip.innerHTML = `
                Asiento: ${infoAsiento.numeroAsiento}<br>
                Sección: ${infoAsiento.seccion}<br>
                Fila: ${infoAsiento.fila}<br>
                Columna: ${infoAsiento.columna}<br>
                Disponible: ${infoAsiento.disponible ? 'Sí' : 'No'}<br>
                Nombre Reserva: ${infoAsiento.nombreReserva}
            `;
            tooltip.style.visibility = 'visible';
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        });

        seatElement.addEventListener('mousemove', (event) => {
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        });

        seatElement.addEventListener('mouseout', () => {
            tooltip.style.visibility = 'hidden';
        });
    } else {
        console.error("Error: La información del asiento no está disponible o es nula.");
    }
}



// Funciones para actualizar la selección de asientos y el precio total
function updateSelectedCount() {
    var selectedSeats = document.querySelectorAll('.row .seat.selected');
    var selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    //  total.innerText = selectedSeatsCount * ticketPrice;
}


// Funciones para actualizar la lista de asientos seleccionados
function updateSelectedlist() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const selectedSeatsList = document.getElementById('selected-seats-list');
    selectedSeatsList.innerHTML = ''; // Limpiar la lista actual

    selectedSeats.forEach(seat => {
        const seatNumber = seat.getAttribute('data-seat-number');

        if (seatNumber) {
            // Iterar sobre asientosCache para encontrar la información de cada asiento seleccionado
            asientosCache.forEach(asiento => {
                if (asiento.numeroAsiento.toString() === seatNumber.toString()) {
                    const listItem = document.createElement('li');

                    // Asignar el contenido usando innerHTML con saltos de línea
                    listItem.innerHTML = `
                        Asiento: ${asiento.numeroAsiento}<br>
                        Sección: ${asiento.seccion}<br>
                        Fila: ${asiento.fila}<br>
                        Columna: ${asiento.columna}<br>
                    `;

                    selectedSeatsList.appendChild(listItem);
                }
            });
        } else {
            console.error("Error: Número de asiento no definido o nulo.");
        }
    });
}


// Función para manejar la compra de boletos



$(document).on('click', '#btncomprar-boleto', function () {
    console.log("Asientos seleccionados: ", selectedSeatIds);
    if (selectedSeatIds.length > 0) {
        let idUsuario = 1; // ID del usuario, puede ser dinámico
        let fechaReserva = new Date().toISOString(); // Fecha actual en formato ISO
        let nombredeReserva = "Concierto Amigos";

        let metodo = 'POST';
        let parametros = {
            idUsuario: idUsuario,
            idAsientos: selectedSeatIds, // Enviar la lista de IDs seleccionados
            fechaReserva: fechaReserva,
            nombreReserva: nombredeReserva,
        };
        console.log(parametros);
        enviarSolicitud(metodo, parametros);
    } else {
        alert("Por favor, selecciona al menos un asiento antes de comprar.");
    }
});
// Función para enviar la solicitud de compra de boletos
function enviarSolicitud(metodo, parametros) {
    $.ajax({
        type: metodo,
        url: "http://localhost:5065/api/Usuarios/ComprarBoleto",
        contentType: "application/json;",
        dataType: "json",
        data: JSON.stringify(parametros),
        success: function (data) {
            show_alerta('Compra realizada con éxito!');

            limpiarAsientosSeleccionados();

            // Limpiar y recargar las áreas de seating
            // Borra el área de asientos del primer escenario
            borrarAreaAsientos('seating');

            // Borra el área de asientos del segundo escenario
            borrarAreaAsientos('seatingdos');

            cargarAsientos();

        },
        error: function (xhr, status, error) {
            console.error("Error en la solicitud: ", error);
            console.log("Detalles del error: ", xhr.responseText);
            show_alerta('Error en la solicitud', 'error');
        }
    });
}


// Función para mostrar alertas
function show_alerta(mensaje, icono, foco = "") {
    if (foco !== "") {
        $('#' + foco).trigger('focus');
    }
    Swal.fire({
        title: mensaje,
        icon: icono,
        customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoomIn' },
        buttonsStyling: false
    });
}


// Cargar todos los asientos y almacenarlos en la variable asientosCache
function cargarAsientos() {
    $.ajax({
        url: "http://localhost:5065/api/Usuarios/Asientos",
        method: "GET",
        success: function (response) {
            asientosCache = response.response; // Almacenar los asientos en la variable global
            console.log("Asientos cargados:", asientosCache);

            // Crear los asientos después de cargar todos
            createSeats(25, 52, matrizFila, 'seating', verificarDisponibilidadAsiento, 24);
            createSeatsDos(13, 50, matrizFilaDOS, 'seatingdos', verificarDisponibilidadAsiento, 11);
        },
        error: function (error) {
            console.error("Error al cargar los asientos:", error);
        }
    });
}



$(document).ready(function () {
    cargarAsientos(); // Cargar los asientos al cargar la página
});



function borrarAreaAsientos(areaId) {
    const areaAsientos = document.getElementById(areaId);
    selectedSeatIds = [];
    parametros = [];

    // Verifica si el área de asientos existe
    if (areaAsientos) {
        // Limpia el contenido del área estableciendo innerHTML a una cadena vacía
        areaAsientos.innerHTML = '';
        console.log(`Área de asientos '${areaId}' borrada exitosamente.`);
    } else {
        console.error(`No se encontró un área con el ID '${areaId}'.`);
    }
}





// Función para limpiar los asientos seleccionados
function limpiarAsientosSeleccionados() {
    // Limpiar la lista de asientos seleccionados en la interfaz
    const selectedSeatsList = document.getElementById('selected-seats-list');
    selectedSeatsList.innerHTML = '';

    // Remover la clase 'selected' de todos los asientos
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
    });

    // Limpiar el contador de asientos seleccionados
    document.getElementById('count').innerText = 0;

    console.log("Asientos seleccionados limpiados.");
}
