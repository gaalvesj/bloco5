console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>



// E a prática? Aqui!
//Crie um irmão para elementoOndeVoceEsta.



//Crie um filho para elementoOndeVoceEsta.
let elemento = document.querySelector('.elementoOndeVoceEsta');
    elemento = document.appendChild('filhoElemento');

//Crie um filho para primeiroFilhoDoFilho.
let filho1 = document.querySelector(".primeiroFilhoDoFilho");
    filho1 = document.appendChild("FilhoDoFilho")
    
//A partir desse filho criado, acesse terceiroFilho.