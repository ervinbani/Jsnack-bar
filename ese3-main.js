/*Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per
i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5
stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

//assegno un arary vuoto dove vado a memorizzare i numeri
var array=[];

//ciclo for che filtra i numeri da uno a 100
for(var i=0;i<101;i++){
  array.push(i);
  //ciclo che controlla i numeri sia multipli di 3 sia multipli di 5
  if((i%3==0)&&(i%5==0)){
      array[i]="fizzbuzz";

  }
  //istruzione che controlla i multipli di 3
  else if(i%3==0){
  array[i]="fizz";
}
//istruzione che controlla i multipli di 5
  else if(i%5==0){
      array[i]="buzz";
  }

}

console.log(array);
