function media(valor1,valor2){

    resultado = ((this.num1+this.num2)/2);
    return  resultado;


}

var num1 = parseInt(prompt("Informe o primeiro número: "));
var num2 = parseInt(prompt("Informe o segundo número: "));

console.log("A média dos números " + num1 + " e " + num2 + " é " + media(num1,num2));


function escreverNumerosAte(valor){

    for (let numero = 1; numero <= valor; numero++) {
        console.log("Escrevendo números até o primeiro número : " + numero);
        
    }
}

escreverNumerosAte(num1);

function divisiveisPor(numero,divisor){

    resultado = num1 / num2 ; 
    if ((num1 % num2) === 0){
      console.log("O número : " + num1 + " é divisível por : " + num2 +  " e o seu resultado é :" + resultado);
    }
    else{
      console.log("O número : " + num1 + " NÃO é divisível por : " + num2);
    }
  }
  
     
     divisiveisPor(num1,num2);

function maiorMenor (valor1, valor2){
    if (valor1 > valor2){
      console.log("O número " + valor1 + " é maior que o número : " + valor2);
    }
 else if (valor1 === valor2) {
    console.log("Os números são iguais");
 }
    else{
      console.log("O número " + valor2 + " é maior que o número : " + valor1);
    }
  }

  
  maiorMenor(num1,num2);

