/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla
 festa.*/

 //creo una lista di oggetti, ogni oggetto contiene le info degli invitati
 //nome, cognome

 var invitato1= {
   "nome": "alessandro",
   "cognome": "delpiero"
 }
 var invitato2= {
   "nome": "gigi",
   "cognome": "bufon"
 }

 var invitato3= {
   "nome": "alex",
   "cognome": "zanardi"
 }
 var invitato4= {
   "nome": ",ario",
   "cognome": "balotelli"
 }

//creo un array dove memorizzare i dati degli invitati
var listainvitati=[invitato1, invitato2, invitato3, invitato4];

//istruzioni per chiedere all'utente i dati e verificare se fa' parte dela
//listaivitati
var control=false;
var nomePersona=prompt("inserisci il nome di una persona");
var cognomePersona=prompt("inserisci il cognome della persona");

for(var i=0;i<listainvitati.length;i++){
  if((listainvitati[i].nome==nomePersona)&&(listainvitati[i].cognome==cognomePersona)){
    control=true;
  }

}
if(control==true){
  document.write("sei tra gli invitati,puoi entrare,  buon divertimento");
}
else{
  document.write("mi disp, non sei invitato, non puoi entrare");
}
