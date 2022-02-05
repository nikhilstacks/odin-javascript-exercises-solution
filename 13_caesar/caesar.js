const caesar = function(string, num) {
    let arr = [];
    for(let i=0;i<string.length;i++)
      {
          if(!(/[a-zA-Z]/.test(string[i])))
        {
            arr[i]=string[i]; 
            continue;
        }
      let n = string.charCodeAt(i) + num;
      if (string[i] == string[i].toLowerCase()) 
        {
            if(n>122)  
          {
              while(n>122)
            {
                n-=26;
            }
        } 
         else  
          {
              while(n<97)
            {
                n+=26;
            }
          }
        }
      else
        {
            if(n>90)
          {
              while(n>90)
            {
                n-=26;
            }
          } 
         else 
          {
              while(n<65)
            {
                n+=26;
            }
          }
        }
      arr[i]=String.fromCharCode(n);    
      }
    return arr.join('');
    }
console.log(caesar('Hello, World!', -29));

// Do not edit below this line
module.exports = caesar;
