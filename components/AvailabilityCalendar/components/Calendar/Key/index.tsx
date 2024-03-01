import React from "react";

const Key = (): JSX.Element => {
  return (
    <div className="key" data-testid="key">
      <div className="type bookedType" data-testid="bookedType">
        <span>Booked</span>
      </div>

      <div className="type CheckInType" data-testid="lateCheckoutType">
        <span>Check In</span>
      </div>
      <div className="type lateCheckoutType" data-testid="lateCheckoutType">
        <span>Checkout</span>
      </div>
    </div>
  );
};

export default Key;
