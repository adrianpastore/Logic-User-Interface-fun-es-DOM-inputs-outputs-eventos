const texto = document.querySelector('#txt');
const excluir = document.querySelector('#excluir');
const button = document.querySelector('#enviar');
const saida = document.querySelector('#finalera');

button.addEventListener('click', function(event) {
    event.preventDefault();
    let text = texto.value;
    let exclui = excluir.value;

    let final = split(text, exclui);
    let counter = 1;
    console.log(final);
    for (let partepalavra of final) {
        saida.innerHTML += '<li>' + counter + ' Parte' + ':   ' + partepalavra + '</li>';
        counter++;
    }
});

function split(texto, retira) {
    let counter2 = 0;
    let resp = [];
    let counter3 = 0;
    let branco = "";
    while (counter2 <= texto.length-1){
        if ((texto[counter2]) !== retira){
            if(counter3 === 2){
                //console.log("oi");
            }
            branco += texto[counter2];
        }
        if (((texto[counter2] === retira)&&(counter2 !== 0))||(counter2 == texto.length-1)){
            resp[counter3] = branco;
            branco = "";
            counter3++;
            //console.log(counter3);
        }
        counter2++;
    }
    //console.log(resp);
    return resp;
}

const parts = split('the:matrix:revisited', ':');
console.log(parts.length === 3);
console.log(parts[0] === 'the');
console.log(parts[1] === 'matrix');
console.log(parts[2] === 'revisited');
console.log(parts[3] === undefined);
 
console.log(split('banana', 'a')[0] === 'b');
console.log(split('banana', 'a')[1] === 'n');
console.log(split('banana', 'a')[2] === 'n');
console.log(split('banana', 'a')[3] === '');
 
const dbo = split('desenvolvimento baseado em objetos', ' ');
console.log(dbo.length === 4);
console.log(dbo[0] === 'desenvolvimento');
console.log(dbo[1] === 'baseado');
console.log(dbo[2] === 'em');
console.log(dbo[3] === 'objetos');