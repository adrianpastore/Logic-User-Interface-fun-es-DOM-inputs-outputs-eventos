let palavra = document.getElementById('campo').value;
function downcase(palavra){
    let outputadc='';
    for(let i=0; i<palavra.length; i++){
        counter=0;
        if((palavra.charCodeAt(i) >= 0) && (palavra.charCodeAt(i) <=64) || (palavra.charCodeAt(i) >= 97) && (palavra.charCodeAt(i) <=122)){
            counter=palavra.charCodeAt(i);
            outputadc += String.fromCharCode(counter)
        }
        if((palavra.charCodeAt(i) >=65) && (palavra.charCodeAt(i) <= 90)){
            let counter = palavra.charCodeAt(i)+32;
            outputadc += String.fromCharCode(counter);
        }
        if((palavra.charCodeAt(i) >= 224) && (palavra.charCodeAt(i) <= 253)){
            counter=palavra.charCodeAt(i);
            outputadc += String.fromCharCode(counter)
        }
        if((palavra.charCodeAt(i) >= 192) && (palavra.charCodeAt(i) <= 221)){
            counter=palavra.charCodeAt(i)+32;
            outputadc += String.fromCharCode(counter)
        }
    }
    return outputadc;
}
let input = document.querySelector('input');

let output = document.querySelector('output');

let button= document.getElementById('bt_adicionar');

button.addEventListener('click', function() {
    output.innerText = downcase(input.value);
});

console.log(downcase('TESTE') === 'teste');
console.log(downcase('Teste') === 'teste');
console.log(downcase('T$% 12TR') === 't$% 12tr');
console.log(downcase('CURSO TÉCNICO EM INFORMÁTICA PARA INTERNET') === 'curso técnico em informática para internet');
console.log(downcase('Grande Área: CIÊNCIA DA COMPUTAÇÃO') === 'grande área: ciência da computação');