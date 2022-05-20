console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>



// E a prática? Aqui!
//Crie um irmão para elementoOndeVoceEsta.
let elemento = document.querySelector('.elementoOndeVoceEsta');
elemento = document.appendChild('filhoElemento');


//Crie um filho para elementoOndeVoceEsta.
//Crie um filho para primeiroFilhoDoFilho.
//A partir desse filho criado, acesse terceiroFilho.