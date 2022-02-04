const removeFromArray = function(arr, ...num) {
      const newArr = arr.slice(); //creating copy of given array 
      const array = [...num];     //saving values of use of operator
      for(let i = 0; i< newArr.length; i++){   //loop till length of main array
        for(let j = 0; j< array.length; j++){
        if(newArr[i] === array[j]){     //if number to be find found in any location
              newArr.splice(i, 1);      //splicing one element from array from that location
              --i;                      //most important as we splicing the array so the next element will \n
              } }                       //come to place of removed element for if value are repeated that \n
          }                             //element will be skipped ************** important must read
      return newArr;
};  
    //console.log(removeFromArray([2,3,4,5],2,3,4,5));
// Do not edit below this line
module.exports = removeFromArray;
