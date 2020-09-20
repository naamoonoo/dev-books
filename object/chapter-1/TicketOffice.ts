import { Ticket } from "./Ticket";

export class TicketOffice {
	private tickets: Ticket[];
	constructor(private amount: number, ...tickets: Ticket[]) {
		this.tickets = tickets;
	}

	getTicket() {
		if (this.tickets.length === 0) {
			console.error("Not enough tickets to sold");
			return null;
		}
		return this.tickets.shift();
	}

	adjustAmount(amount: number) {
		if (this.amount + amount < 0) {
			console.error("not enough money");
		}

		this.amount += amount;
	}
}
