// =====================================================
// BOTÃO CALCULAR
// =====================================================

const botaoCalcular = document.getElementById('calcular');


// =====================================================
// EVENTO DE CLIQUE
// =====================================================

botaoCalcular.addEventListener('click', function () {


    // =====================================================
    // CAPTURA DOS VALORES
    // =====================================================

    const homens = parseInt(document.getElementById('homens').value) || 0;

    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;

    const criancas = parseInt(document.getElementById('criancas').value) || 0;


    // =====================================================
    // VALIDAÇÃO
    // =====================================================

    if (homens === 0 && mulheres === 0 && criancas === 0) {

        alert('Digite pelo menos uma quantidade de pessoas.');

        return;
    }


    // =====================================================
    // CÁLCULOS
    // =====================================================

    const carne =
        (homens * 200) +
        (mulheres * 100) +
        (criancas * 100);


    const frango =
        (homens * 100) +
        (mulheres * 100) +
        (criancas * 50);


    const linguica =
        (homens * 150) +
        (mulheres * 50) +
        (criancas * 50);


    const refrigerante =
        (homens * 100) +
        (mulheres * 200) +
        (criancas * 200);


    const cerveja =
        (homens * 800) +
        (mulheres * 500);


    // =====================================================
    // ÁREA DE RESULTADO
    // =====================================================

    const resultado = document.getElementById('resultado');


    resultado.style.display = 'block';


    // =====================================================
    // HTML DINÂMICO
    // =====================================================

    resultado.innerHTML = `

        <h2>🔥 Resultado do Churrasco</h2>

        <p>
            🥩 <strong>Carne bovina:</strong>
            ${(carne / 1000).toFixed(1)} kg
        </p>

        <p>
            🍗 <strong>Frango:</strong>
            ${(frango / 1000).toFixed(1)} kg
        </p>

        <p>
            🌭 <strong>Linguiça:</strong>
            ${(linguica / 1000).toFixed(1)} kg
        </p>

        <p>
            🥤 <strong>Refrigerante:</strong>
            ${(refrigerante / 1000).toFixed(1)} L
        </p>

        <p>
            🍺 <strong>Cerveja:</strong>
            ${(cerveja / 1000).toFixed(1)} L
        </p>
    `;
});