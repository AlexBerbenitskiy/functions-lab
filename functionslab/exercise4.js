fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(responseBody => {
  const values = responseBody.results;
  const completed = values.filter( (todo, completed) => {
    console.log('${todo.title} - ${todo.completed}');
    return todo.completed === "true"
  });
  console.log(completed);
  const number = completed.reduce((total,todo) =>{
    return total+todo
  },200)
  console.log(number);
}) 
.catch(function(err) { 
  console.log(err);
});