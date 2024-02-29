function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res=>res.json())
 .then(data=>displayPerson(data))
}
loadPost();
function displayPerson(data){
    const posts=document.getElementById('post-show');
    for(user of data)
    {
        console.log(user);
        const div=document.createElement('div');
        div.classList.add('post-design')
        div.innerHTML=`
        <h4>User -${user.userId}</h4>
        <h5>Post Title - ${user.title}</h5>
        <p>Post ${user.body}</p>
        `
        posts.appendChild(div)
    }

}

