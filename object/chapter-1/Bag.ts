import { Invitation } from "./Invitation";
import { Ticket } from "./Ticket";

export class Bag {
	constructor(
		private amount: number,
		private invitation?: Invitation,
		private ticket?: Ticket
	) {}

	hold(ticket: Ticket) {
		this.setTicket(ticket);
		if (this.hasInvitation()) {
			return 0;
		}
		const ticketFee = ticket.getFee();
		this.adjustAmount(-1 * ticketFee);
		return ticketFee;
	}

	private hasInvitation() {
		return !!this.invitation;
	}

	private hasTicket() {
		return !!this.ticket;
	}

	private setTicket(ticket: Ticket) {
		this.ticket = ticket;
	}

	private adjustAmount(amount: number) {
		if (this.amount + amount < 0) {
			console.error("not enough money");
		}

		this.amount += amount;
	}
}
