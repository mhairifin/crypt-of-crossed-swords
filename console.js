export default class AdventureConsole {
    constructor(consoleNode, inputNode, adventure) {
	this.consoleNode = consoleNode;
	this.inputElement = inputNode;
	this.adventure = adventure;
    }

    start() {
	var title_element = document.createElement("p");
	console.log(this.adventure);
	title_element.innerHTML = "> " + this.adventure.title();

	var initWrap = document.createElement("p");
	var initText = document.createElement("b");
	initText.innerHTML = "> " + this.adventure.initialText();
	initWrap.appendChild(initText);
	
	this.consoleNode.appendChild(title_element);
	this.consoleNode.appendChild(initWrap);
    }

    addLine(content, narrator) {
	var node = document.createElement("p");
	var innerNode = document.createElement(narrator ? "b" : "i");
	innerNode.innerHTML = "> "+ content;
	node.appendChild(innerNode);
	this.consoleNode.appendChild(node);
    }

    clean(input) {
	input = input.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
	return input.toLowerCase();
    }
}
