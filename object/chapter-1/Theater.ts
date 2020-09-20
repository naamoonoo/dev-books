import { Audience } from "./Audience";
import { Ticket } from "./Ticket";
import { TicketSeller } from "./TicketSeller";

export class Theater {
	constructor(private ticketSeller: TicketSeller) {}

	// 의존성이 높은 코드
	// enter(audience: Audience) {
	// 	const ticket = this.ticketSeller.getTicketOffice().getTicket();
	// 	if (!ticket) {
	// 		return console.error(
	// 			"sorry customer, we have no more ticket to sold"
	// 		);
	// 	}

	// 	if (!audience.getBag().hasInvitation()) {
	// 		audience.getBag().adjustAmount(-1 * ticket.getFee());
	// 		this.ticketSeller.getTicketOffice().adjustAmount(ticket.getFee());
	// 	}

	// 	audience.getBag().setTicket(ticket);
	// }

	enter(audience: Audience) {
		this.ticketSeller.sellTo(audience);
	}
}
