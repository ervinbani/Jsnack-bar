//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

alert();

var num1=prompt("inserisci un numero");
var num2=prompt("inserisci un altro numero");

if(num1>num2){
  document.write("Il numero maggiore è = ", + num1);

}
else if(num1<num2){
  document.write("Il numero maggiore è = ", + num2);

}

else{
  document.write("hai inserito due numeri uguali", + num2);

}
