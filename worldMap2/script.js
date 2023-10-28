async function getData(place){
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=4aeb7c2346774264acda96e380b7ca5a&location=${place}`;

    const response = await fetch(url);
    const data = await response.json();
    const time = data.datetime;

    document.querySelector("#time").innerHTML = `${place}'s time = ${time} ${data.timezone_abbreviation}`;
}

document.querySelectorAll(".allPaths").forEach(event => {
    event.addEventListener("mouseover", function(){
        window.onmousemove = function(j){
            let x = j.clientX;
            let y = j.clientY;
            document.querySelector("#name").style.top = y - 20 + "px";
            document.querySelector("#name").style.left = x + 10 + "px";
        }

        event.style.fill = "pink";
        document.querySelector("#namep").innerText = event.id;
        document.querySelector("#name").style.opacity = 1;
    })

    event.addEventListener("mouseleave", function(){
        event.style.fill = "#ececec";
        document.querySelector("#name").style.opacity = 0;
    })

    event.addEventListener("click", function(){
        getData(event.id);
    })
})
