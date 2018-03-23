/*Gatsby vuole sapere la composizione dei suoi invitati.
Prendendo il suo array di invitati, in cui ogni elemento un “nome cognome”,
 vuole sapere la percentuale di invitati uomini e invitati donne. Per aiutarsi,
  si è creato due array di appoggio con nomi tipicamente da uomo e da donna.*/

  //creo una lista di oggetti, ogni oggetto contiene le info degli invitati
  //nome, cognome e sesso

  var invitato1= {
    "nome": "nome1",
    "cognome": "cognome1",
    "sesso": "m"
  }
  var invitato2= {
    "nome": "nome2",
    "cognome": "cognome2",
    "sesso": "m"
  }
  var invitato3= {
    "nome": "nome3",
    "cognome": "cognome3",
    "sesso": "m"
  }
  var invitato4= {
    "nome": "nome4",
    "cognome": "cognome4",
    "sesso": "m"
  }
  var invitato5= {
    "nome": "nome5",
    "cognome": "cognome5",
    "sesso": "m"
  }
  var invitato6= {
    "nome": "nome6",
    "cognome": "cognome6",
    "sesso": "f"
  }
  var invitato7= {
    "nome": "nome7",
    "cognome": "cognome7",
    "sesso": "f"
  }
  var invitato8= {
    "nome": "nome8",
    "cognome": "cognome8",
    "sesso": "f"
  }
  var invitato9= {
    "nome": "nome9",
    "cognome": "cognome9",
    "sesso": "f"
  }
  var invitato10= {
    "nome": "nome10",
    "cognome": "cognome10",
    "sesso": "f"
  }
//creo un array con tutti gli invitati
var listainvitati=[invitato1, invitato2, invitato3, invitato4, invitato5,
   invitato6, invitato7, invitato8, invitato9, invitato10];

//istruzioni per calcolare il numero degli uomini e delle donne
var donne=0;
var uomini=0;
for(var i=0;i<listainvitati.length;i++){
  if(listainvitati[i].sesso=="f"){
    donne++;
  }
  else{
    uomini++;
  }

}

//il programma stampa le percentuali

var percentualidonne=(donne/listainvitati.length)*100;
var percentualiuomini=uomini/listainvitati.length*100;

document.write("invitatti donne sono :  ", percentualidonne, "%", "invitati uomini sono : ", percentualiuomini, "%"   );
