

const icon = document.querySelector("#dropDown")

icon.addEventListener("click",()=>{
    console.log("clicked")
    document.querySelector("#nav").classList.toggle("show")
})


// $("#nav li").click(()=>{
//     $("#nav").toggle("hide")
// })
