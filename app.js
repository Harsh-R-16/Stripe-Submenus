import { sublinks } from "./data.js"
let li = document.querySelectorAll("li")
let div = document.querySelector("div")
let divHider = document.querySelector("#div")
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("mouseover", function () {
        getLink(i)
        div.classList.remove("div")
    })
}
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("mouseout", function () {
        div.classList.add("div")
    })
}
div.addEventListener("mouseover", function () {
    div.classList.remove("div")
})
div.addEventListener("mouseout", function () {
    div.classList.add("div")
})
function getLink(n) {
    divHider.innerHTML = ` <h3>${sublinks[n].page}</h3>`
    let ul = document.createElement("ul")
    for (let i = 0; i < sublinks[n].links.length; i++) {
        let li = document.createElement("li")
        li.innerHTML = `<icon class="${sublinks[n].links[i].icon}"></icon>
        <a href="${sublinks[n].links[i].url}">${sublinks[n].links[i].label}</a>
        `
        ul.appendChild(li)
    }
    divHider.appendChild(ul)
}
let sideBar = document.querySelector("#sideBar")
for (let i = 0; i < sublinks.length; i++) {
    let sec = document.createElement("section")
    sec.innerHTML = `<h4>${sublinks[i].page}</h4>`
    let ul = document.createElement("ul")
    for (let j = 0; j < sublinks[i].links.length; j++) {
        ul.innerHTML += `<a href="${sublinks[i].links[j].url}"><li><icon class="${sublinks[i].links[j].icon}"></icon>
        ${sublinks[i].links[j].label}</li></a>`
    }
    sec.appendChild(ul)
    sideBar.appendChild(sec)
}
let closeButton = document.querySelector("#cross")
closeButton.addEventListener("click", function () {
    sideBar.classList.toggle("sc")
})