console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>



// E a prática? Aqui!
//Crie um irmão para elementoOndeVoceEsta.
  


//Crie um filho para elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
   let childerelementoOndeVoceEsta =  document.parentElement("section");
    childerelementoOndeVoceEsta.id = "childerelementoOndeVoceEsta";
    elementoOndeVoceEsta.appendChild("childerelementoOndeVoceEsta");
    elementoOndeVoceEsta.innerText = ("Testando!!");



//Crie um filho para primeiroFilhoDoFilho.
//let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
  //  filho1 = document.appendChild("FilhoDoFilho")

//A partir desse filho criado, acesse terceiroFilho.
    //let terceiroFilho = filho1.getElementById('terceiroFilho');

