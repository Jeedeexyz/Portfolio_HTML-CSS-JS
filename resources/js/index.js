
// For nav bar
const icon = document.querySelector("#dropDown")

icon.addEventListener("click",()=>{
    console.log("clicked")
    document.querySelector("#nav").classList.toggle("show")
})

// for card details

const card = document.querySelectorAll(".item")

for(let i=0;i< card.length;i++){
card[i].addEventListener("mouseenter",()=>{
    document.querySelectorAll("#card-detail")[i].classList.toggle("visible")
})
card[i].addEventListener("mouseleave",()=>{
    document.querySelectorAll("#card-detail")[i].classList.toggle("visible")
})
}


