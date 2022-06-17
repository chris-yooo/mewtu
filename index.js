console.clear();

const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

function fetchData() {
  fetch(apiURL)
    .then(response => response.json())
    .then(pokedata => createPoke(pokedata.results));
}
fetchData();
function createPoke(names) {
  const listElement = document.createElement('ul');
  document.body.append(listElement);

  names.forEach(name => {
    const item = document.createElement('li');

    const heading = document.createElement('h5');
    heading.innerText = name.name;
    item.append(heading);

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

    listElement.append(item);
  });
}

// function createPokeDetail(name, )
