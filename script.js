const hd=document.querySelector("#heading")

hd.classList.add("red-text")

const p=document.createElement("p")
p.textContent="This is paragraPH added by jsvascipt"
document.body.appendChild(p)

const div=document.getElementById("div")
div.style.backgroundColor="blue"
div.style.color="red"