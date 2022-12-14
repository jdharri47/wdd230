url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(fruitData) {
    const option1 = document.querySelector("#option1");
    const option2 = document.querySelector("#option2");
    const option3 = document.querySelector("#option3");
    

    for (i=0; i<32;i++) {
       const option = document.createElement("option");
       let fruitName = fruitData[i].name;
       option.textContent = fruitName;
       option.setAttribute("value", fruitName);
       option1.appendChild(option);
       option2.appendChild(option);
       option3.appendChild(option);
    }
}