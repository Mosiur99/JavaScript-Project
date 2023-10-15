const generateMemeBtnEL = document.querySelector(".generate-meme-btn");
const memeImageEl = document.querySelector("img");
const memeTitleEl = document.querySelector(".meme-title");
const memeAuthorEl = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
    memeImageEl.setAttribute("src", url);
    memeTitleEl.innerHTML = title;
    memeAuthorEl.innerHTML = `Meme By: ${author}`;
}

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then(data => {
        updateDetails(data.url, data.title, data.author);
    });
}

generateMemeBtnEL.addEventListener("click", generateMeme);

generateMeme();