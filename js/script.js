


let activeBtn = null;

function filtroCards(category) {
    let cards = document.querySelectorAll(".card");
    cards.forEach(
        card => {
            if(card.dataset.category === category || category === "all"){
                card.style.display = "block";
            }else {
                card.style.display = "none";
            }
        }
    )
    if (activeBtn) {
        activeBtn.style.fontWeight = "";
      }
    
      activeBtn = document.querySelector(`#${category}-btn`);
      activeBtn.style.fontWeight = "bold";
}

let backBtn = document.querySelector("#backend-btn")
backBtn.addEventListener("click",function(){
    filtroCards("backend")
})
let frontBtn = document.querySelector("#frontend-btn")
frontBtn.addEventListener("click",function(){
    filtroCards("frontend")
})
let allBtn = document.querySelector("#all-btn")
allBtn.addEventListener("click",function(){
    filtroCards("all")
})

