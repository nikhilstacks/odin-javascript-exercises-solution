const ftoc = function(temp) {
     return parseFloat(((temp - 32) * 5/9).toFixed(1)); 
};
//converting with respective furmulae with fixed one decimal but to fixed convert result to string
//that is why use of parseFloat to convert string into float 
//******* important dont use parseInt it will ommit the decimal value
const ctof = function(temp) {
     return parseFloat((temp * 9/5 + 32).toFixed(1));
};
   console.log(ctof(73.2));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
