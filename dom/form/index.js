//my-form nertei HTML form-iig barij avad 'form' gej sanaarai
let form = document.forms["my-form"];
// output ID-tei HTML element-iig olj avad 'outputContainer' gej sanaarai
let outputContainer = document.getElementById("output");

// form-iin orj irsen utgiig avah function
// utga orj irehed ni 'data' gedeg Object-d form-n orj irsen utguudiig avna
function getValues(event) {
  // form-n default uildel ni server-luu huselt yvuulaad huudsaa refresh hiideg (bichsen utga alga bolno)
  event.preventDefault();

  let data = {
    name: this.name.value,
    color: this.favColor.value,
  };
  // form-n utgaa avsan ym chin goy haruuliy
  const outputHMTL = `
		<p>Name: <span>${data.name}</span></p>
    <p>Fav color: <span>${data.color}</p>
	`;
  // say deer goy haruulsan ur dungee 'outputContainer' dotor hiichvel huudas deer haragdana.
  outputContainer.innerHTML = outputHMTL;
}
// gadnaas utga orj irehed 'getValues' function-iig ajilluul
form.onsubmit = getValues;
