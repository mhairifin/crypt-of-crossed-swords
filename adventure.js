
export default class Adventure {
    constructor() {
	// TODO: Load in adventure from JSON here?
	this.inventory = [];
    }

    title() {
	return "Crypt of Crossed Swords";
    }

    initialText() {
	return "Okay so you walk into a cavern. There's an <i>absurd rock peg</i> in the center of the room. Your way east is blocked by a constant flow of poison acid streaming out of a narrow opening."
    }

    help() {
	return "Try solving the crossword clues, and using the resulting items";
    }

    handleResponse(input) {
	if (input.includes("pick up") && input.includes("cork")) {
	    return "CORK added to inventory";
	}
	else if (input.includes("help")) {
	    return this.help();
	}
	else {
	    return "Sorry, I'm not sure what you said";
	}
    }
}
