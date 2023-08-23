const formAtividade = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festeiro" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

formAtividade.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já está incluso na lista.`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    console.log(mediaFinal);

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
/*feito em minha logica

function calculaMediaFinal() {
    let somaMedia = 0;

    for (let i = 0; i < notas.length; i++) {
        somaMedia += notas[i];
    }

    return media = somaMedia / notas.length;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    const resultadoMediaFinal = document.getElementById('media-final')

    resultadoMediaFinal.innerHTML = mediaFinal;
}

function verificaAprovacao() {
    const mediaFinal = calculaMediaFinal();
    const defineAprovacao = document.getElementById('resultado')
    if (mediaFinal > 7) {
        defineAprovacao.style.backgroundColor = '#009432'
        defineAprovacao.innerHTML = 'Aprovado'
    } else {
        defineAprovacao.style.backgroundColor = 'red'
        defineAprovacao.innerHTML = `Reprovado`
    }
}
*/