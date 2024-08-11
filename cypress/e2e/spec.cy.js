describe("Login -> Fill out the Weight Loss Eligibility Intake form -> Submit and confirm the success message", () => {
	it("Should log in with valid credentials, fill out the form, submit and confirm", () => {
		cy.wait(7000);
		cy.login(); // Command to login with valid credentials

		cy.wait(7000);
		// Navigate and open the form "Weight Loss Eligibility Intake"
		cy.get('[data-testid="requests-list"] > :nth-child(10)').click();
		cy.wait(5000);

		// Fill out the form
		cy.get(".q-field__native").click();
		cy.get(".q-item-type").contains("Male").click();
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("25");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("5.9");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("64");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-checkbox__inner").eq(1).click();
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-checkbox__inner").eq(1).click();
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").click();
		cy.get(".q-item-type").contains("other").click();
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-checkbox__inner").eq(1).click();
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-btn__content").children().contains("1").click();
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("test@maildrop.cc");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("7000000007");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("Velachery");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("Chennai");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("Tamil Nadu");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-field__native").type("600014");
		cy.continue(); // Command that performns "Continue" action

		cy.get(".q-radio__bg").eq(1).click();
		cy.continue(); // Command that performns "Continue" action

		cy.get("input[type=file]").selectFile("QA Engineer Project.pdf");
		cy.continue(); // Command that performns "Continue" action

		// Submits the form
		cy.get("form").submit();

		cy.get(".q-card__actions button").contains("Submit").click();
		cy.wait(5000);

		cy.contains(
			"Thank you for your submission. We have sent you a confirmation email for your records."
		);

		cy.get("button").contains("Close").click();

		cy.get(".q-btn__content > .q-icon").click();
		cy.wait(1000);

		// Navigate to My Requests and confirm the created request
		cy.get(".q-item__label").contains("My Requests").click();

		cy.get(".sortable").children().first().contains("Created").click().click();
	});
});
