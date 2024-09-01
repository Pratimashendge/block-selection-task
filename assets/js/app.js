const selectcategory = document.getElementById("selectcategory");
const alldivs = [...document.querySelectorAll('.allcategory')];

const oncategorychange = (event) => {
    const selectedcategory = event.target.value;

    // Hide all divs initially
    alldivs.forEach(div => div.classList.add('d-none'));

    // Show divs with the selected category class if a valid category is selected
    if (selectedcategory) {
        alldivs
            .filter(div => div.classList.contains(selectedcategory))
            .forEach(div => div.classList.remove('d-none'));
    }
};

// Check if selectcategory and alldivs are defined before adding the event listener
if (selectcategory) {
	selectcategory.addEventListener('change', oncategorychange);
}