function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    //se elemento(diferente de null, undefined, etc) e localName = audio
    if (elemento && elemento.localName==='audio'){
        elemento.play();
    }else{
        console.log('elemento não encontrado ou seletor inválido');
    }
}

const listaTeclas = document.querySelectorAll('.tecla');//cria uma lista de todos os elementos com a classe .tecla

for(let i= 0;i < listaTeclas.length;i++){//estrutura de repetição para iterar na lista de teclas

    const tecla = listaTeclas[i];//recebe um item da lista de teclas a partir do contador na array
    const instrumento = tecla.classList[1]; //encontra a segunda classe daquele item no html
    const idAudio = `#som_${instrumento}`;//template String -> concatena a classe na string padrão

    tecla.onclick = function(){//cria uma função para contornar o problema de ativar o toque do aúdio imediatamente
        tocaSom(idAudio);//repassa a classe do instrumento como parametro
    }
    //o objeto evento (ou event) recebe como valor a instrução que a cria, no caso o tecla.onkeydown
    tecla.onkeydown = function(evento){
        if (evento.code==='Space' || evento.code==='Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}

/*
const listaTeclas = document.querySelectorAll('input[type=button]');
for(let i=0; i<listaTeclas.length;i++){
  const tecla = listaTeclas[i];
  const numero = tecla.value;

  tecla.onclick = function(){
     console.log(numero)
  }
}
 */




/*
    document = entra no index.html
    querySelector = procura o elemento espeficicado
    . = entra no elemento e possibilita interagir com seus recursos
    onclick = define uma interação ao clicar
    = tocaSomPom = chama a função no main.js (escrever "tocaSomPom()" faria a função
    ser executada logo ao carregar a pagina

document.querySelector('.tecla_pom').onclick = tocaSomPom;

*/
