
let el=document.getElementById('submit')
submit.addEventListener('click',function (event)
{
    event.preventDefault();
    let list = document.getElementById("list");
    let new_l= document.createElement("li")
    let new_a = document.createElement("a")
    new_a.href = document.getElementById("url").value
    new_a.textContent = document.getElementById("name").value
    new_l.appendChild(new_a)
    list.appendChild(new_l)
} )
