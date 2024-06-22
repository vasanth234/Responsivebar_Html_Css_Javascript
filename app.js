const dark=document.querySelector(".dark")
const night=document.querySelector(".night")
const light=document.querySelector(".light")
const sidebar=document.querySelector(".sidebar")
const activelistItem=document.querySelector(".list-item.active")


dark.addEventListener("click",()=>{
    sidebar.className="sidebar"
    activelistItem="list-item.active"
})

night.addEventListener("click",()=>{
    sidebar.className="sidebar night"
    activelistItem="list-item.active night"
})

light.addEventListener("click",()=>{
    sidebar.className="sidebar light"
    activelistItem="list-item.active light"
})



console.log(dark)