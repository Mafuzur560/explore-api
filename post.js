function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const displayContainer = document.getElementById('display-container');
    for(const item of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>USER: ${item.id}</h4>
        <h5>TITLE: ${item.title}</h5>
        <p>POST DESCRIPTION: ${item.body}</p>
        ` ;
        displayContainer.appendChild(div);
    }
}
