const accessKey = "x7G9CC4EM8An2GacaoVRoJlZgLtL97iqK-TQbVUS9pQ";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreEl = document.getElementById("show-more-button");

let inputData = "";
let pageNumber = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(pageNumber === 1){
        searchResultsEl.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultsEl.appendChild(imageWrapper);
    });

    pageNumber++;
    if(pageNumber > 1){
        showMoreEl.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    pageNumber = 1;
    searchImages();
});

showMoreEl.addEventListener("click", () =>{
    searchImages();
});