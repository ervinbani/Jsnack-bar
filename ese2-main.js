/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

//l'utente inserisce due parole con prompt
var stringa1=prompt("inserisci una  stringa");
var stringa2=prompt("inserisci una seconda stringa");

//il programma trasforma le due parole in due array per misurare la lunghezza
var str1=stringa1.split("");
var str2=stringa2.split("");
console.log(str1, str2);

//istruzioni che cnfrontano le lunghezze delle due parole e stampano in ordine,
//prima quella piu corta, poi la stringa piu lunga
if(str1.length>str2.length){
  console.log(str2.join());
  console.log(str1.join());
else if(str1.length<str2.length){
  console.log(str1.join());
  console.log(str2.join());

}

//se le due stringhe sono della stessa lunghezza
else{
  console.log("hai inserito due stringhe della stessa lunghezza");

}
