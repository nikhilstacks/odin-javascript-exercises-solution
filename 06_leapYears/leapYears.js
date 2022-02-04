const leapYears = function(year) {
    if(year % 100 == 0){    //if year is divisible by 100
     if(year % 400 == 0){   //then check year is divisible by 400
      return true;
     }
     else {
        return false;
    } 
    } if(year % 4 == 0){    //if year gives 0 reminder on divisible by 4
        return true;
    } else {
        return false;
    }
    
};
    console.log(leapYears(1900));
// Do not edit below this line
module.exports = leapYears;
