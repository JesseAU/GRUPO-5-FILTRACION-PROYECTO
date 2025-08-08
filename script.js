let numeros = [];

function agregarNumero() {
  const input = document.getElementById('inputNumero');
  const valor = parseInt(input.value);

  if (!isNaN(valor)) {
    numeros.push(valor);
    input.value = ""; // Limpiar input
    actualizarTabla();
    actualizarListas();
  } else {
    alert("Por favor, ingresa un número válido.");
  }
}

function actualizarTabla() {
  const tabla = document.getElementById('tablaNumeros');
  tabla.innerHTML = "";

  numeros.forEach(num => {
    const fila = document.createElement('tr');
    const celda = document.createElement('td');
    celda.textContent = num;
    fila.appendChild(celda);
    tabla.appendChild(fila);
  });
}

function actualizarListas() {
  const listaPares = document.getElementById('listaPares');
  const listaImpares = document.getElementById('listaImpares');
  const sumaParesSpan = document.getElementById('sumaPares');
  const sumaImparesSpan = document.getElementById('sumaImpares');

  listaPares.innerHTML = "";
  listaImpares.innerHTML = "";

  let sumaPares = 0;
  let sumaImpares = 0;

  numeros.forEach(num => {
    if (num % 2 === 0) {
      let li = document.createElement('li');
      li.textContent = num;
      listaPares.appendChild(li);
      sumaPares += num;
    } else {
      let li = document.createElement('li');
      li.textContent = num;
      listaImpares.appendChild(li);
      sumaImpares += num;
    }
  });

  sumaParesSpan.textContent = sumaPares;
  sumaImparesSpan.textContent = sumaImpares;
}
