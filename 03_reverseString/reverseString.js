const reverseString = function(string) {
      const newArr = string.split(""); //best practice to not alter main input string
      console.log(newArr);  //check by logging the value of newArr
      const answer = []; //new array where our all new values are going to save
      
      for(let i = newArr.length - 1;i >= 0; i--){
          answer.push(newArr[i]);      //pushing value of newArr from last
      }
      return answer.join(''); //returning array to string back
};

// Do not edit below this line
module.exports = reverseString;
