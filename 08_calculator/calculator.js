const add = function(num1, num2) {
	    return num1 + num2;
};

const subtract = function(num1, num2) {
	    return num1 - num2;
};

const sum = function(num) {
      const numbersToSum = num;
      console.log(numbersToSum);
      let sum = 0;
	    if(numbersToSum.length == 0){
        return 0;
      } else {
          for(let i = 0; i < numbersToSum.length; i++){ 
            sum += numbersToSum[i];
            }
        }
        return sum;
};
console.log(sum([1,2,3]));

const multiply = function(num) {
      const numbersToMultiply = num;
      let answer = 1;
      for(let i = 0; i < numbersToMultiply.length; i++){
        answer *= numbersToMultiply[i];
      }
      return answer;

};
console.log(multiply([3,2]));

const power = function(num, exp) {
	  let answer  = 1;    
    while(exp > 0){
        answer *= num;
        exp--;
      }
      return answer;
};

const factorial = function(num) {
	  if(num == 0 || num == 1){
      return 1;
    } else {
      return num * factorial(num - 1);
    }
};
console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
