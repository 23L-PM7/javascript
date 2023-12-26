let form = document.forms["my-form"];
let outputContainer = document.getElementById("output");

function getValues(event) {
  event.preventDefault();

  let data = {
    name: this.name.value,
    "fav color": this["fav-color"].value,
    gender: this.gender.value,
    "fav foods": [],
  };
  let favFoods = document.querySelectorAll(".fav-foods");

  for (let food of favFoods) {
    if (food.checked) {
      data["fav foods"].push(food.value);
    }
  }
  const outputHMTL = `
		<p>Name: <span>${data.name}</span></p>
		<p>Fav color: <span>${data["fav color"]}</span></p>
		<p>Gender: <span>${data.gender}</span></p>
		<p>Fav food: <span>${data["fav foods"]}</span></p>
	`;
  console.log(data);

  outputContainer.innerHTML = outputHMTL;
}

form.onsubmit = getValues;
