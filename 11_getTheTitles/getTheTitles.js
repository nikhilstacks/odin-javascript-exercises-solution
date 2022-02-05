const getTheTitles = function(books) {
    const titles =  [];
     for(let i = 0; i< books.length;i++ ){
         titles.push(books[i].title)   //using the . operator to access the title key in array of objects
     }
     return titles;
};
console.log(getTheTitles([
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]));
// Do not edit below this line
module.exports = getTheTitles;
