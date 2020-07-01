let vacationType= prompt("What kind of vacation would you like to go on? Musical, Tropical, or Adventurous");
let groupSize= prompt("How many people will be going on this trip?");

let destination;
if(vacationType=="Musical"){
destination = "New Orleans";
}else if(vacationType=="Tropical"){
destination="Beach Vacation in Mexico";
}else if(vacationType=="Adventurous"){
destination="Whitewater Rafting the Grand Canyon";
} else {"false"}

let members;
if(groupSize>0 && groupSize <=2){
members="first class flight";
}else if(groupSize>=3 && groupSize <=5){
members="helicopter";
}else if(groupSize>=6){
members="charter flght";
}else {"false"}

let result = "Since your a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + members + " to " + destination

console.log(result)
document.write(result)
