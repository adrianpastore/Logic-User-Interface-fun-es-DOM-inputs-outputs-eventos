const n = 10;
const tab = 9;
const space = 32;
const M = 13;

let diferentepalvra = function(ascii) {
    let charCode = ascii.charCodeAt();
    if (charCode === space || charCode === M || charCode === n || charCode === tab) {
        return false;
    }
    return true;
}   

let trimLeft = function(str) {
    let r = '';
    let ok = false;
    for (let i = 0; i < str.length; i++) {
        if (diferentepalvra(str[i]) || ok) {
        r += str[i];
        ok = true;
      }
    }
    return r;
  }

let reverse = function(str) {
    let reverseword = '';
    for(let i = str.length-1; i >= 0; i--) {
        reverseword += str[i];
    }
    return reverseword;
}

let trimRight = function (str){
    let r = '';
    let ok = false;
    let rever = reverse(str)
    for (let i = 0; i < rever.length; i++) {
        if (diferentepalvra(rever[i]) || ok){
        r += rever[i];
        ok = true;
      }
    }
    return r = (reverse(r));
  }

  let trim = function (str){
      let final = trimLeft(trimRight(str))
      return final;  
  }

  console.log(trimLeft('    abc  ') === 'abc  ');
  console.log(trimLeft('    com espaco  ') === 'com espaco  ');
  console.log(trimLeft('\r \n \t com carriage return, line feed, tab e espaco  \n') === 'com carriage return, line feed, tab e espaco  \n');
   
  // aparar String à direita: remover espaços à direita da String
  console.log(trimRight('    abc  ') === '    abc');
  console.log(trimRight('    abc \r \n \t ') === '    abc');
   
  // aparar String em ambos lados
  console.log(trim('    abc  ') === 'abc');
  alert(trim('    abc  '))
  console.log(trim('\n \r\t      abc\n\r \t        ') === 'abc');
  console.log(trim('\n \r\t      com espaco\n\r \t        ') === 'com espaco');
   
  // situações excepcionais
  console.log(trimLeft('') === '');
  console.log(trimRight('') === '');
  console.log(trim('') === '');
  console.log(trimLeft('   \n\t\r  \n\r ') === '');
  console.log(trimRight('   \n\t\r  \n\r ') === '');
  console.log(trim('   \n\t\r  \n\r ') === '');
  console.log(trim('                                                                  a                                                                                       ') === 'a');