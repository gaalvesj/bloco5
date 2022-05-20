console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>



// E a prática? Aqui!
//Crie um irmão para elementoOndeVoceEsta.
  let brotherelementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
  brotherelementoOndeVoceEsta = document.parentElement("section");
  brotherelementoOndeVoceEsta.id = 'brotherelementoOndeVoceEsta';
  elementoOndeVoceEsta.appendChild("brotherelementoOndeVoceEsta");


//Crie um filho para elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
   let childerelementoOndeVoceEsta =  document.parentElement("section");
    childerelementoOndeVoceEsta.id = "childerelementoOndeVoceEsta";
    elementoOndeVoceEsta.appendChild("childerelementoOndeVoceEsta");



//Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
    filho1 = document.parentElement("section");
    filho1.id = "filho1";
    primeiroFilhoDoFilho.appendChild("filho1");


//A partir desse filho criado, acesse terceiroFilho.
    let terceiroFilho = document.getElementById

