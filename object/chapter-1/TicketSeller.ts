import { Audience } from "./Audience";
import { TicketOffice } from "./TicketOffice";

export class TicketSeller {
	constructor(private ticketOffice: TicketOffice) {}

	getTicketOffice() {
		return this.ticketOffice;
	}

	sellTo(audience: Audience) {
		const ticket = this.ticketOffice.getTicket();
		if (!ticket) {
			return console.error(
				"sorry customer, we have no more ticket to sold"
			);
		}
		const ticketFee = audience.buy(ticket);
		this.ticketOffice.adjustAmount(ticketFee);
	}
}
