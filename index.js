console.clear();

const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

function fetchData() {
  fetch(apiURL)
    .then(response => response.json())
    .then(pokedata => createPoke(pokedata.results));
}
function createPokeDetail(name){
  const list = document.createElement('ul');
  document.body.append(list);
  const pokeName = document.createElement('h2');
  const form = document.querySelector("[data-js=form]");
  form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const apiUrlDetail = apiURL + ["id"];
    console.log(event);
    console.log(apiUrlDetail);


  })

}




// function createPokeDetail(name, id, height, base_experience){
//   const list = document.createElement('ul');
//   document.body.append(list);
//   const name = document.createElement('h2');
//   const id = document.createElement('li');
//   const height = document.createElement('li');
//   const base_experience = document.createElement('li');
//   const form = document.querySelector("[data-js=form]");
//   form.addEventListener("submit", (event) =>{
//     event.preventDefault();

//   })

// }




// fetchData();
// function createPoke(names) {
//   const listElement = document.createElement('ul');
//   document.body.append(listElement);

//   names.forEach(name => {
//     const item = document.createElement('li');

//     const heading = document.createElement('h5');
//     heading.innerText = name.name;
//     item.append(heading);

    // const colorList = document.createElement('ul');
    // item.append(colorList);

    // const hairColorItem = document.createElement('li');
    // hairColorItem.innerText = `Hair: ${person.hair_color}`;
    // colorList.append(hairColorItem);

    // const skinColorItem = document.createElement('li');
    // skinColorItem.innerText = `Hair: ${person.skin_color}`;
    // colorList.append(skinColorItem);

    // const eyeColorItem = document.createElement('li');
    // eyeColorItem.innerText = `Hair: ${person.eye_color}`;
    // colorList.append(eyeColorItem);
    
  



