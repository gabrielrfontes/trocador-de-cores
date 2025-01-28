const cores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'] // as letras e os números são necessários para formar o código das cores
const botao = document.getElementById('botao')
const cor = document.getElementById('cor')

botao.addEventListener('click', function alterar(){
    let coresComplexas = '#';
    for(let i = 0; i < 6; i++){ // Laço para formar o código das cores que têm o esse formato de 6 caracteres, por exemplo, #f1f5f8
        coresComplexas += cores[gerarNumero()]
    }

    cor.textContent = coresComplexas
    document.body.style.backgroundColor = coresComplexas
})

function gerarNumero(){
    return Math.floor(Math.random() * cores.length)
}