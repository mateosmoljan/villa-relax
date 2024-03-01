import React from "react";

function PaymentConditions() {
  return (
    <div>
      <h2 className="font-bold text-2xl text-dark_blue_black mb-4">
        Payment and booking conditions
      </h2>
      <div className="flex flex-col gap-5 mb-5">
        <p>Tourist tax is not included in the price!</p>
        <p>
          For your reservation to be secured it is obligation to pay{" "}
          <span className="font-titleBold">30%</span> of full price in advance
          directly to owner of accommodation and{" "}
          <span className="font-titleBold">70%</span> when you come to
          accommodation unit.
        </p>
        <p>Deposit refundable if all is well: 500 euros.</p>
        <p>
          Possibility of free cancellation one week after booking (EXCEPT IN
          LAST MINUTE RESERVATIONS, THEN THE DEADLINE IS 48 HOURS). Last minute
          - Reservation two weeks before.
        </p>
        <p>
          On the last day of the stay, the guest is obliged to leave the
          accommodation <span className="font-titleBold">until 10 am</span>, so
          the other guests can check in{" "}
          <span className="font-titleBold">from 4 pm</span>.
        </p>
        <p>
          Pets are welcome and are charged an additional{" "}
          <span className="font-titleBold">10 €</span> for 1 night.
        </p>
      </div>
      <div>
        <p className="font-titleBold">Payment methods:</p>
        <ul>
          <li>Cash (upon arrival) </li>
          <li>Bank Transfer (Internet Banking)</li>
          <li>Paypal</li>
          <li>Credit and Debit Cards (Visa, MasterCard ...)</li>
        </ul>
      </div>
    </div>
  );
}

export default PaymentConditions;
