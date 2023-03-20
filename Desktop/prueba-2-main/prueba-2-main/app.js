'use strict'



const GI = {
    createElement(tag, atributes) {
        let element = document
        return document.createElement(tag)
    }
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]


addLi()

function addLi() {
    var contenido
    for (let i = 0; i < to_do.length; i++) {
        var li = document.createElement("li");
        var p = document.createElement("p");
        var input = document.createElement("input");
        input.type = 'checkbox';

        contenido = to_do[i];
        p.appendChild(document.createTextNode(contenido));
        document.querySelector("#list-content").appendChild(li).appendChild(p);
        document.querySelector("#list-content").appendChild(li).appendChild(input)
    }
}

