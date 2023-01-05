var divContainer = document.getElementById('container')
var btnClear = document.getElementById('clear')


// Partie I : Afficer hello world après 2 secondes
function showAlert(){
    alert('Hello World.')
}
setTimeout(showAlert , 2000)


// Partie II : 
function addContainerChilder(){
    var paragraphe = document.createElement('p')
    paragraphe.textContent = 'Hello World'
    divContainer.appendChild(paragraphe)
}
setTimeout(addContainerChilder , 2000)

// Partie III 
function addParagraphe(){
    var paragraphe = document.createElement('p')
    paragraphe.textContent = 'Hello World'
    divContainer.appendChild(paragraphe)
}
var intervalToAdd = setInterval(addParagraphe , 2000)
btnClear.onclick = () =>{
    clearInterval(intervalToAdd)
}