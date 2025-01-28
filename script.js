const cores = ["green", "red", "yellow", "black", "blue", 'white']
const botao = document.getElementById('botao')
const cor = document.getElementById('cor')

botao.addEventListener('click', function alterar(){
     // Variável para gerar um número aleatório (entre 0 e 5, pois são os números do vetor "cores")
    const numAleat = gerarNumero()
    document.body.style.backgroundColor = cores[numAleat]
    cor.textContent = cores[numAleat]
})

function gerarNumero() {
    return Math.floor(Math.random() * cores.length)
}
