const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap = document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',change)

function change(){
    let hexcolor="#"
    for(let i=1;i<=6;i++){
        hexcolor+=randhexvalue()
    }
    wrap.style.background =hexcolor
    colortext.innerHTML =hexcolor
}

function randhexvalue(){
    let randIndex=Math.floor(Math.random()*16)
    return hex[randIndex]
}