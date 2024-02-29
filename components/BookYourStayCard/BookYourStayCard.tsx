"use client";
import { useState } from "react";
import "./bookcard.css";

function BookYourStayCard() {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
      className={`flex flex-col gap-4 px-3 py-6 custom_shadow border-[1px] border-grey/10 rounded-md ${
        hovered ? "custom_shadow_hovered" : "custom_shadow"
      }`}
    >
      <p className="font-poppins text-grey font-ExtraBold text-right">
        from <span className="text-3xl text-yellow">375 €</span> per night
      </p>
      <hr />
      <button className="btn justify-center">Book Your Stay</button>
    </div>
  );
}

export default BookYourStayCard;
