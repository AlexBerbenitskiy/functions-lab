fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(responseBody => {
  const values = responseBody.results;
  const uncompleted = values.filter( (todo, uncompleted).map(todo => {
    return {
      title:'${todo.title.first} ${todo.title.last}',
      completed: todo.completed
    }
  }));
  console.log(uncompleted);
})
.catch(function(err) { 
  console.log(err);
});