class Filme{
    constructor(titulo, diretor, anoLancamento){
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(novoTitulo){
        this.titulo = novoTitulo;
    }

    getDiretor(){
        return this.diretor;
    }

    setDiretor(novoDiretor){
        this.diretor = novoDiretor;
    }

    getAno(){
        return this.anoLancamento;
    }

    setAno(novoAno){
        this.anoLancamento = novoAno;
    }

    criarElementoVisualFilmes(){
        const exibicao = document.createElement("p");
        exibicao.innerHTML = this.titulo + " - " + this.diretor + " (" + this.anoLancamento + ")";
        return exibicao;
    }
}


let titulo = document.getElementById("titulo");
let diretor = document.getElementById("diretor");
let anoLancamento = document.getElementById("ano");

let addButton = document.getElementById("addButton");
let lista = document.getElementById("lista");

let filmes = [];

addButton.addEventListener("click", exibirDados)


function exibirDados(){

    let valorTitulo = titulo.value;
    let valorDiretor = diretor.value;
    let valorAnoLancamento = anoLancamento.value;


    if(valorTitulo && valorDiretor && valorAnoLancamento) {

        let filme = new Filme(valorTitulo, valorDiretor, valorAnoLancamento);
        filmes.push(filme);

        lista.appendChild(filme.criarElementoVisualFilmes())

        valorTitulo = "";
        valorDiretor = "";
        valorAnoLancamento = "";
    }


}