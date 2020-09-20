export class Ticket {
	constructor(private fee: number) {}

	public getFee() {
		return this.fee;
	}
}
