"use strict";
import AdventureConsole from "./console.js";
import Adventure from "./adventure.js";

window.addEventListener('load', function() {
    var consoleNode = document.getElementById("cons");
    var inputNode = document.getElementById("input");

    inputNode.addEventListener('keydown', function(event) {
	var input = this.value;
	if (event.key === "Enter") {
	    text_console.addLine(input, false);
	    this.value="";
	    input = text_console.clean(input);
	    text_console.addLine(adventure.handleResponse(input), true);
	}
    });
    
    var adventure = new Adventure();
    var text_console = new AdventureConsole(consoleNode, inputNode, adventure);
    text_console.start()
})
    
