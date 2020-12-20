const baseURL = 'https://dog.ceo/api/breeds/image/random';

const input = document.getElementById('input');

const renderDogs = async () => {
    const wrapper = document.getElementById('wrapper');
    let html = '';
    for (let i =0; i < input.value; i++) {
        await fetch(baseURL).then(res => res.json()).then(json => {
            html += `<div class="card">
            <img src="${json.message}" alt="dog">
        </div>`;
        }).catch("Error");
        let newhtml = html + '<div class="empty"></div><div class="empty"></div><div class="empty"></div>';
        wrapper.innerHTML = newhtml;
    };
    input.value = "";
};

const button = document.getElementById("button");
button.addEventListener("click", () =>{
    if (isNaN(input.value)) {
        alert("Is not a number!");
        input.value = '';
    } else {
    renderDogs();
    console.log(input.value);}
});

input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 ) {
        renderDogs();
        console.log(input.value)
    };
});