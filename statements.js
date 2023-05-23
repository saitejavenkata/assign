//Logical operaters
var x = 5;
var y = 10;
 var result = (x<y)&&(x==5);
 console.log(result);


var a = 6;
var b = 11;
 var result = (a<b)||(a==5);
 console.log(result);

 var p = 16;
var q = 11;
 var result = !(p>q);
 console.log(result);
// printing from 0 to 10 for loop
var i;
for(i=0;i<=10;i++){
    console.log(i);
}

// printing from 10 to 1 for loopvar j;
for(j=10;j>=1;j--){
    console.log(j);
}
// Printing even numbers upto 20
var k;
for(var k=0;k<=20;k+=2){
    console.log(k);
}
// printing odd numbers
var i;
var remainder;
for (i=0;i<=10;i++)
{
    var remainder =i%2;
    if(remainder ==1)
    console.log(i)

}
//  printing even numbers using for loop
var i;
for (i=0;i<=10;i++)
  if(i%2==0){
   console.log(i);
}



// if,else
var k = 200;
var l = 300;
if(k>l){
    console.log(l);
}
else{
    console.log(k);
}

// if,else if,else
 var age=25;
 if(age>18 && age<60){
    console.log(`Major`);
 }
 else if(age>60){
    console.log("Senior Citizen");
 }

 else if(age<1){
    console.log("iNFANT");
 }
  else{
    console.log("Not Valid");
 }