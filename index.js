console.clear();

const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

function fetchPokeDetail() {
  const form = document.querySelector('[data-js=form]');
  form.addEventListener('submit', event => {
    event.preventDefault();
    let apiUrlDetail = apiURL + form.id.value;
    console.log(apiUrlDetail);
    fetch(apiUrlDetail)
      .then(response => response.json())
      .then(pokedata => fetchPokeDetail(pokedata.results));
    const listElement = document.createElement('ul');
    document.body.append(listElement);
    const name = document.createElement('li');
    name.innerText = `Name: ${name}`;
    listElement.append(name);
  });
  form.reset();
}

fetchPokeDetail();

// function createPeopleList(people) {
//   const listElement = document.createElement('ul');
//   listElement.className = 'tag-list'
//   document.body.append(listElement);

// const order = {
//   flavor: form.flavor.value,
//   balls: form.balls.valueAsNumber,
//   container: form.container.value,
//   extraCream: form["extra-cream"].checked,
//   wishes: form.wishes.value,
// };

// function createPokeDetail(name, id, height, base_experience){
//   const list = document.createElement('ul');
//   document.body.append(list);
//
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
