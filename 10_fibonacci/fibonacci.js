const fibonacci = function(num) {
    const fab = [1,1];    //first two element are fixed 1 and 1
    
    if(num < 0){
        return 'OOPS';    //if negative return OOPS
    }
    for(let i = 2; i < num;i++ ){
       let temp = 0;
       temp = fab[i - 1] + fab[i - 2];    //sum of previous two elements and push them into array fab
       fab.push(temp);
    }
    return fab[num - 1];  //returning the num(th) element because we have to specify index so num - 1
};
console.log(fibonacci(8));
// Do not edit below this line
module.exports = fibonacci;
