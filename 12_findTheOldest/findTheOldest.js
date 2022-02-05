const findTheOldest = function(people) {
      let age = [];
      const today = new Date();      //today variable have saved value to present date
      for(let i = 0; i< people.length; i++){
          if(people[i].hasOwnProperty("yearOfDeath") == false){  //checking if person is not dead
              
            //finding age of currently alive person
            age.push(today.getFullYear() - people[i].yearOfBirth);
          } else{

            //finding age of the dead person
              age.push(people[i].yearOfDeath - people[i].yearOfBirth);
          }
      }
      let largestAge = 0;
      age.forEach((element) => {
         if(element > largestAge){   //saving the largest age from age array to a variable
             largestAge = element;
         }
      })
      let resultingObject = age.indexOf(largestAge);  //finding the index of the largest age 
      return people[resultingObject];  //return the obj who have the largest age
};
console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]));

// Do not edit below this line
module.exports = findTheOldest;
