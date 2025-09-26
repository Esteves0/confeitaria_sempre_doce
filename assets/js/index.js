//Criar a lista de imagens

let imagens = [
    'assets/img/bolo-capa-1.jpg',
    'assets/img/bolo-capa-2.jpg', 
    'assets/img/bolo-capa-3.jpg'    
]


let indiceAtualListaImagem = 0


function exibirImagem(){
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagem]
}

//Lógica para exibir as imagens a cada 5 segundos
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagem++
    //Verifica se chegou no fim das imagens
    if (indiceAtualListaImagem>2){
        indiceAtualListaImagem = 0
    }
}, 5000);

exibirImagem()
indiceAtualListaImagem++