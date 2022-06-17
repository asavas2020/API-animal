const display = document.querySelector(".display");

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.classList.contains("button")) {
        generateRandomAnimal();
    }
})

const generateRandomAnimal = async () => {
    let url = "https://zoo-animal-api.herokuapp.com/animals/rand";
    


    const res = await axios(url);
    console.log(res.data);
    renderAnimal(res);
};

const renderAnimal = (res) =>{
    const {name, latin_name, animal_type, geo_range, image_link, habitat} = res.data ;

    display.innerHTML = `<ul>    <li><img src="${image_link}" alt="img" width="50%"/></li>    <li>Name: ${name}</li>    <li>Type: ${animal_type}</li>    <li>Geo Range: ${geo_range}</li>    <li>Habitat: ${habitat}</li>    <li>Latin Name: ${latin_name}</li>  </ul>`;
}

setInterval(generateRandomAnimal, 5000)