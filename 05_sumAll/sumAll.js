const sumAll = function(rangeMin, rangeMax) {
    let sum = 0;
    if(rangeMin > rangeMax){ //if the value of first parameter if bigger swap the value
        let temp = rangeMin;
        rangeMin = rangeMax;
        rangeMax = temp;
    }
    if(typeof rangeMax == "number" && typeof rangeMin == "number" && rangeMin > 0 && rangeMax > 0){
        for(let i = rangeMin; i<= rangeMax; i++){  //checking input is a positive number
            sum += rangeMin;
            rangeMin++;
        }
    }  else {
        return "ERROR";
    }
      return sum;
};
    console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;
