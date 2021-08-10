//Function that is used to find compund intrest 
const power=require("./power.js");     //Using that we will find power of no
const Compund_intrest=(p,r,t,n)=>{    // function declaration

const a=(1+r/n);
const b=n*t;
const intrest=power(a,b)*p;
return intrest;
}
//cp();
var x=Compund_intrest(1000,10,1,1);
console.log(x);