// console log hello world here
console.log("Hello World");

//FOR EACH
var friends = [ "Oscar", "Ana", "Jafeth", "Kenneth", "Daella", "Lily"];
friends.forEach(function (element){
   // console.log(element )
});

friends.forEach(function (item, index){
    if(item=="Ana"){
      //  console.log(item.toLowerCase())
    }
    else{
       // console.log(item.toUpperCase())
    }
})

let books = [
    {
        title : "Sin cadenas",
        author: "Anna James",
        pages : 200
    },
    {
        title : "Silla ruedas",
        author: "Anna Clark",
        pages : 500
    }
]

books.forEach(function (item){
  //  console.log(item.author + item.pages);
});

//FOR IN
