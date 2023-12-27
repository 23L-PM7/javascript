let form = document.forms["my-form"];
let outputContainer = document.getElementById("output");

function getValues(event) {
  event.preventDefault();

  let data = {
    name: this.name.value,
  };

  const outputHMTL = `
		<p>Name: <span>${data.name}</span></p>
	`;

  outputContainer.innerHTML = outputHMTL;
}

form.onsubmit = getValues;
