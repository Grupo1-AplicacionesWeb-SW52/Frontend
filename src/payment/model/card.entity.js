class Card {
	constructor(
		id,
		cardHolder,
		cardNumber,
		expirationDate,
		cvv,
		tutorId = null,
		caregiverId = null,
	) {
		this.id = id;
		this.cardHolder = cardHolder;
		this.cardNumber = cardNumber;
		this.expirationDate = expirationDate;
		this.cvv = cvv;
		this.tutorId = tutorId;
		this.caregiverId = caregiverId;
	}
}

export default Card;
