import { Bag } from "./Bag";
import { Ticket } from "./Ticket";

export class Audience {
	constructor(private bag: Bag) {}

	getBag() {
		return this.bag;
	}

	buy(ticket: Ticket) {
		const ticketFee = this.bag.hold(ticket);

		return ticketFee;
	}
}
