function todosShow(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todosData){
    const displayContainer2 = document.getElementById('display-container2');
    for(const item of todosData){
        const div = document.createElement('div');
        div.classList.add('todos')
        div.innerHTML = `
        <h4>USER: ${item.id}</h4>
        <h5>TITLE: ${item.title}</h5>
        <p>POST DESCRIPTION: ${item.completed}</p>
        ` ;
        displayContainer2.appendChild(div);
    }
}