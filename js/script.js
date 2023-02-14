


let activeBtn = null;

function filterCards(selectedCategories) {
    // select cards
    const cards = document.querySelectorAll(".card");
    // loop through each card
    for (let card of cards) {
        // get the card's categories
        let cardCategories = JSON.parse(card.dataset.categories);

        // check if the selected categories overlap with the card's categories
        let overlap = selectedCategories.some(selectedCategory => cardCategories.includes(selectedCategory));
        
        // show the card if there is an overlap or if "all" is selected
        if (overlap || selectedCategories.includes("all")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }



}

// select filters
const filters = document.querySelectorAll(".filter-btn");

// add click event listeners to filters
for (let filter of filters) {
  filter.addEventListener("click", function() {
    
    // remove the "active" class from all filters
    for (let f of filters) {
      f.classList.remove("active");
    }

    // add the "active" class to the clicked filter
    this.classList.add("active");

    // get the selected categories
    let selectedCategories = [...filters].filter(f => f.classList.contains("active")).map(f => f.dataset.category);

    // filter the cards
    filterCards(selectedCategories);
  });
}

