const URL = "https://v2.jokeapi.dev/joke/Any";

const btn = document.querySelector("#btn");
const jokes = document.querySelector("#joke");
let key = 0;
let para1,para,para2;

btn.addEventListener("click",async function(){

    if(key === 1){
        jokes.removeChild(para1)
        jokes.removeChild(para2)
    }
    else if(key === 2){
        jokes.removeChild(para)
    }

    let response = await fetch(URL);
    let data = await response.json();
    
    let setup = data.setup;

    if(setup){
        key = 1;
        para1 = document.createElement("p");
        para2 = document.createElement("p");
    
        para1.innerText = data.setup;
        para2.innerText = data.delivery;
    
        jokes.appendChild(para1);
        jokes.appendChild(para2);
    }
    else{
        key = 2;
        para = document.createElement("p");
        para.innerText = data.joke;
        jokes.appendChild(para)
    }
    

})