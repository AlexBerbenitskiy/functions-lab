fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())  // Get response body stream
.then(responseBody => {
    const todos = responseBody.results; 
    console.log(todos);

    const todoTitles = todos.map( todo => {
      return {
        id: `${todo.id.first} ${todo.id.last}`,
        title: todo.Title,
      };
    });
    console.log(todoTitles);})
console.log(todoTitles)

