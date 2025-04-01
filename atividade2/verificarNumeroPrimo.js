/*Atividade 2
Questao fundamental da matematica e programacao. 
Todos os números pares, sao constituidos por numeros primos.
Muito utilizado em segurança, por dificil codificacao: matematica quantica.
P versus MP
Crivo de Aratostenes.
*/
function verificarNumeroPrimo(n){
  if (n < 2){
    return false;
  } //faz o primeiro  teste e prossegue 
  if (n <= 3){
    return true;
  } //fazer o teste só do 3, já que os outros são false
  if (n % 2 ==0){
    return false;
  } //verifica se o numero e par

  for (let i = 3; i < n; i +=2) {
    if (n % i ==0 ){
      return false;
    }
  } //o numero é divisivel por 3, 5 ou 7...? se sim, não é primo. Crivo.
  return true;
}
console.log ("verificarNumeroPrimo(0)="+verificarNumeroPrimo(0));
console.log ("verificarNumeroPrimo(1)="+verificarNumeroPrimo(1));
console.log ("verificarNumeroPrimo(2)="+verificarNumeroPrimo(2));
console.log ("verificarNumeroPrimo(3)="+verificarNumeroPrimo(3));
console.log ("verificarNumeroPrimo(7)="+verificarNumeroPrimo(7));
console.log ("verificarNumeroPrimo(83)="+verificarNumeroPrimo(83));
console.log ("verificarNumeroPrimo(100)="+verificarNumeroPrimo(100));
console.log ("verificarNumeroPrimo(991)="+verificarNumeroPrimo(991));
console.log ("verificarNumeroPrimo(104729)="+verificarNumeroPrimo(104729));
console.log ("verificarNumeroPrimo(14348907)="+verificarNumeroPrimo(14348907));