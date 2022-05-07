
console.log(`start`)

const content = document.getElementById("content");


function handleChange(event) {
    const value = event.target.value;
    if (isNaN(value)) return;
    handleGenerateContent(+value)
}


function handleGenerateContent(count) {
    content.innerHTML = "";

    let fragment = document.createDocumentFragment();

    if (!count) return;
    for (let i = 0; i < count; i++) {

        let divItem = document.createElement("div");
        divItem.classList.add("layout__content__item");

        let divNumber = document.createElement("div");
        divNumber.classList.add("item__number")
        divNumber.innerText = i + 1;
        divItem.appendChild(divNumber);


        fragment.appendChild(divItem)
    }

    content.appendChild(fragment)
}
