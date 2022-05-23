//console.log(document.getElementById('start').nextSibling) // nó
//console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>



// E a prática? Aqui!
//Crie um irmão para elementoOndeVoceEsta.
//  let brotherelementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
//  brotherelementoOndeVoceEsta = document.parentElement("section");
//  brotherelementoOndeVoceEsta.id = 'brotherelementoOndeVoceEsta';
//  elementoOndeVoceEsta.appendChild("brotherelementoOndeVoceEsta");


//Crie um filho para elementoOndeVoceEsta.
//let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
//   let childerelementoOndeVoceEsta =  document.parentElement("section");
//    childerelementoOndeVoceEsta.id = "childerelementoOndeVoceEsta";
//    elementoOndeVoceEsta.appendChild("childerelementoOndeVoceEsta");



//Crie um filho para primeiroFilhoDoFilho.
//let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
//    filho1 = document.parentElement("section");
 //   filho1.id = "filho1";
 //   primeiroFilhoDoFilho.appendChild("filho1");


//A partir desse filho criado, acesse terceiroFilho.
//const terceiroFilho = filhoPrimeiroFilhoDoFilho
//       parentElement // primeiroFilhoDoFilho
//       parentElement // elementoOndeVoceEsta
//       nextElementSibling; // terceiroFilho
//    console.log(terceiroFilho);


//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let elementoH1 = document.createElement("h1");
    elementoH1.innerText = "Exercício 5.2 - JavaScript DOM";
    document.body.appendChild(elementoH1);

//Adicione a tag main com a classe main-content como filho da tag body;
let elementoMain = document.createElement("main");
    elementoMain.className = 'main-content';
    document.body.appendChild(elementoMain);
//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let elementoSectionCenter = document.createElement("section");
    elementoSectionCenter.className = 'center-content';
    elementoMain.appendChild(elementoSectionCenter);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let elementoP1 = document.createElement("p");
    elementoSectionCenter.appendChild(elementoP1);
    elementoP1.innerText = 'Primeiro paragrafo da pagina!!'

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let elementoSectionLeft = document.createElement("section");
    elementoSectionLeft.className = 'left-content';
    elementoMain.appendChild(elementoSectionLeft);


//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let elementoSectionRight = document.createElement("section");
elementoSectionRight.className = 'right-content';
elementoMain.appendChild(elementoSectionRight);


//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let smallImage = document.createElement('img');
smallImage.className = 'small-image';
elementoSectionLeft.appendChild(smallImage);
smallImage.scr = 'https://picsum.photos/200';
//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
//Adicione a classe title na tag h1 criada;
//Adicione a classe description nas 3 tags h3 criadas;
//Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
//Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.




