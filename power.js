//power function
// b
//a
const power=(a,b)=>{
let pow=1;
    for(let n=1;n<=b;n++){
  pow=pow*a;

    }

    //console.log("The solution is :",pow);
    return pow;
};

//power(3,2);
module.exports=power;
