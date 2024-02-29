function loaddata2() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
      .then((res) => res.json())
  
      .then((json) => console.log(json));
  }
  function losdusers(){
    const url="https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res=>res.json())
    .then(data=>dsiplayUser(data));
  }
  function dsiplayUser(data) {
    const ul=document.getElementById('user-list');
    for(user of data)
    {
        console.log(user);
        const li=document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);

        
    }
    const eul=document.getElementById('user-mail');
    for(users of data){
        const eli=document.createElement('li');
        eli.innerText=users.email;
        eul.appendChild(eli);


    }
    
  }