const palindromes = function (str) {
    let computeString = str.replace(/\s/g,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    console.log(computeString);
    let count = 0;
    for(let i = 0; i< computeString.length; i++){
        for(j = computeString.length - (i + 1); j >=0; j--){
            if(computeString[i] == computeString[j]){
                count++;
            } 
            break;
        }
    } 
    if(count == computeString.length){
        console.log(count);
        return true;
    } else {
        console.log(count);
        return false;
    }
};
console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;
