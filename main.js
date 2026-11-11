const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji celebrando" />`;
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji decepcionado" />`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado:</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado:</span>`;
const notaMinina = parseFloat(prompt("Digite a nota mínima!"));

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});  

function adcionaLinha() {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`Esta atividade: ${inputNomeAtividade.value} já foi inserida`);
        return false;
    } else {
        atividades.push(inputNomeAtividade.value);
notas.push(parseFloat(inputNotaAtividade.value));

let linha = "<tr>";
linha += `<td>${inputNomeAtividade.value}</td>`;
linha += `<td>${inputNotaAtividade.value}</td>`;
linha+= `<td>${parseFloat(inputNotaAtividade.value) >= notaMinina  ? imgAprovado : imgReprovado}</td>`;
linha+= `</tr>`;

linhas += linha;
    }

alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);

inputNomeAtividade.value = "";
inputNotaAtividade.value = "";

return true;

}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinina  ? spanAprovado : spanReprovado;
}    
function calculaMediaFinal() {
    if (notas.length === 0) return 0;
    
    let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}
    
return somaDasNotas / notas.length;
}