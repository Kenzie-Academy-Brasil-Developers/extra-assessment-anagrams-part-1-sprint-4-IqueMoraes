//escutar o clique do botao
//capturar a palavra esscrita
//ordenar a palavra em ordem alfabética
//comparar com as palavras do dicionário
//retornar as palavras iguais

const dictionary = palavras.map((word) => alphabetize(word));
// console.log(dictionary)
const button = document.getElementById("findButton");
const caixa_resultado = document.getElementById('caixa_resultado')
const caixa_array = document.getElementById('caixa_array')


function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
  }

function getAnagramsOf(x){
    let simpleLetters = alphabetize(x);
    let equalWords =[];
    let equalWordsIndex = dictionary.filter((element, index) => {
      if(element === simpleLetters){
        //   console.log(index);
        //   console.log(element);
          equalWords.push(palavras[index]);
          return palavras[index];
      }
    });
//  console.log(equalWordsIndex);
//  console.log(equalWords);
return equalWords;
}

function limparTela(){
    while (caixa_resultado.firstChild) {
        caixa_resultado.removeChild(caixa_resultado.firstChild);
    }
    while(caixa_array.firstChild){
        caixa_array.removeChild(caixa_array.firstChild)
    }
}

function imprimir(textContent, typedText){
    let resultado = document.createElement('ul');
    resultado.setAttribute('id', 'resultado');
    caixa_resultado.appendChild(resultado);
    caixa_array.innerHTML =`[${textContent}]`;
    
    for(let i=0; i<textContent.length; i++){
        if(textContent[i] !== typedText){

            let newAnagram = document.createElement('li');
            newAnagram.innerHTML = textContent[i];
            resultado.appendChild(newAnagram);
        }
    }
}


button.addEventListener("click", function () {
    let typedText = document.getElementById("input").value;
    let textContent = getAnagramsOf(typedText);
    limparTela();
    imprimir(textContent, typedText);

});




//   document.body.appendChild()