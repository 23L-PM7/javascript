// Use createElement to create a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// Use appendChild to append a node to a list of child nodes
const container = document.getElementById("container");
container.appendChild(newParagraph);

// Use textContent to get and set the text content of a node
console.log(newParagraph.textContent);

// Use innerHTML to get and set the HTML content of an element
container.innerHTML = "<h2>Updated Content</h2>";

// Compare innerHTML vs. createElement for creating new elements
const newDiv = document.createElement("div");
newDiv.innerHTML = "<p>This is a paragraph inside a div.</p>";
container.appendChild(newDiv);
