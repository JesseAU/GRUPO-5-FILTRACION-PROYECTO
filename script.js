document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formNumeros');
    const input = document.getElementById('numeros');
    const acumularChk = document.getElementById('acumular');
    const limpiarBtn = document.getElementById('limpiar');

    const paresSpan = document.getElementById('pares');
    const imparesSpan = document.getElementById('impares');
    const sumaParesSpan = document.getElementById('sumaPares');
    const sumaImparesSpan = document.getElementById('sumaImpares');
    const sumaTotalSpan = document.getElementById('sumaTotal');

    // arreglo donde guardaremos los números (si se usa "acumular")
    let numeros = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        procesarEntrada();
    });

    limpiarBtn.addEventListener('click', () => {
        numeros = [];
        actualizarUI();
    });

    function procesarEntrada() {
        const raw = input.value.trim();
        if (!raw) {
            alert('Por favor ingresa al menos un número.');
            return;
        }

        // aceptamos separadores: coma, espacio o punto y coma
        const tokens = raw.split(/[\s,;]+/).filter(Boolean);
        // convertir a número y aceptar solo enteros válidos
        const parsed = tokens
            .map(t => Number(t))
            .filter(n => Number.isFinite(n) && Number.isInteger(n));

        if (parsed.length === 0) {
            alert('No se encontraron números enteros válidos en la entrada.');
            return;
        }

        if (acumularChk.checked) {
            numeros = numeros.concat(parsed);
        } else {
            numeros = parsed.slice(); // reemplaza la lista (no acumula)
        }

        input.value = '';
        actualizarUI();
    }

    function actualizarUI() {
        if (numeros.length === 0) {
            paresSpan.textContent = '—';
            imparesSpan.textContent = '—';
            sumaParesSpan.textContent = '0';
            sumaImparesSpan.textContent = '0';
            sumaTotalSpan.textContent = '0';
            return;
        }

        const pares = numeros.filter(n => n % 2 === 0);
        const impares = numeros.filter(n => n % 2 !== 0);

        const sumaPares = pares.reduce((a, b) => a + b, 0);
        const sumaImpares = impares.reduce((a, b) => a + b, 0);
        const sumaTotal = sumaPares + sumaImpares;

        paresSpan.textContent = pares.length ? pares.join(', ') : '—';
        imparesSpan.textContent = impares.length ? impares.join(', ') : '—';
        sumaParesSpan.textContent = sumaPares;
        sumaImparesSpan.textContent = sumaImpares;
        sumaTotalSpan.textContent = sumaTotal;
    }

    // inicial
    actualizarUI();
});
