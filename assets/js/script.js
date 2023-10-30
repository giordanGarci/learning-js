var ul = document.querySelector("ul");
const input = document.querySelector("input")
var but = document.querySelector("button")

function deuEnter(e){
    if(e.key === "Enter" && input.value.trim() !== ""){
        var li1 = document.createElement("li")
        li1.innerHTML = input.value
        ul.appendChild(li1)
        input.value = ""
    }
}

function clicou(){
    ul.removeChild(ul.lastChild)
}

input.addEventListener('keyup', deuEnter)