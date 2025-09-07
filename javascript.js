//Variables
var name="Alice";
const age = 19;
let country = "India";
console.log("Name:",name);
console.log("Age:",age);
console.log("Country:",country);

//Arrays
let fruits=["Apple","Banana","Mango","Orange"];
console.log("Fruits:",fruits);
console.log("First Fruit:",fruits[0]);
fruits.push("guava");
console.log("After adding guava list becomes:",fruits);

//Functions
function greet(userName){
    return "Hello,"+ userName + "!";
}
console.log(greet("Alice"));

const add =function(a,b){
    return a+b;
}
console.log("Sum:"+add(6,10));

//Objects
let person={
    name:"Ramya",
    age:19,
    country:"India",
    greet:function(){
        return "Hi,I'm "+this.name+" from "+this.country;
    }
};
console.log(person.name);
console.log(person.greet());

//Loops
for(let i=0;i<fruits.length;i++){
    console.log("Fruit "+(i+1)+":"+fruits[i]);
}
let count=1;
while(count<=3){
    console.log("Count: "+count);
    count++;
}