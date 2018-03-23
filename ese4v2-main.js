/*Il software deve chiedere per 5 volte volte all’utente di inserire un
 numero. Il programma stampa la somma di tutti i numeri inseriti.
  Esegui questo programma in due versioni, con il for e con il do..while

  ------VERSIONE DO-WHILE-----*/

  var somma=0;
  var i=0;

  do{
    var inputnumber=parseInt(prompt("inserisci un numero intero da sommare: "));

    while(isNaN(inputnumber)){
      var inputnumber = parseInt(prompt("Fai attenzione, devi inserire un numero!"));
    }
    i++;
    somma+=inputnumber;


  }while(i<5);

  document.write("la somma dei 5 numeri è : ", somma);
