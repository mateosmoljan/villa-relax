import "./style.css";

function HowToReserve() {
  return (
    <section className="py-10 how_to_reserve">
      <div className="">
        <div className="flex gap-4">
          <div className="flex items-start">
            <span className="text-2xl font-ExtraBold text-dark_blue_black bg-gray-100 px-8 py-2 rounded-md inner_shadow">
              1.
            </span>
          </div>
          <div className="mb-8">
            <h3 className="font-titleBold text-xl mb-4">Send us an inquiry</h3>
            <p>
              Please send us inquiry via{" "}
              <a
                href="/contact"
                className="hover:underline hover:text-dark_yellow text-yellow font-Bold"
              >
                contact form
              </a>
              , email or phone with all required information and period you wish
              to spend a vacation in holiday home Villa Eni and expect fast
              e-mail answer and our best offer
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-start">
            <span className="text-2xl font-ExtraBold text-dark_blue_black bg-gray-100 px-8 py-2 rounded-md inner_shadow">
              2.
            </span>
          </div>
          <div className="mb-8 ">
            <h3 className="font-titleBold text-xl mb-4">
              Securing reservation (payment)
            </h3>
            <p>
              For your reservation to be secured it is obligation to pay 30% of
              the full amount in advance and rest of the amount on the day of
              arrival. After you make payment, please send us notification and
              we will send you confirmation of payment and booking. There are 2
              options to make advance payment: bank transfer and via PayPal
              (debit and credit cards).
            </p>
            <div className=" mt-8 px-4">
              <div className="">
                <h4 className="font-titleBold mb-3">Bank Transfer</h4>
                <ul className="flex flex-col gap-1">
                  <li>
                    Account owner:{" "}
                    <span className="font-Bold">Srećko Lučić</span>
                  </li>
                  <li>
                    Address:{" "}
                    <span className="font-Bold">
                      Mihatovići 57, 52440 Poreč, Croatia
                    </span>
                  </li>
                  <li>
                    Bank:{" "}
                    <span className="font-Bold">Privredna banka Zagreb dd</span>
                  </li>
                  <li>
                    <span className="font-Bold">
                      Radnička cesta 50, 10000 Zagreb, Croatia
                    </span>
                  </li>
                  <li>
                    SWIFT: <span className="font-Bold">PBZGHR2X</span>
                  </li>
                  <li>
                    IBAN (euro):{" "}
                    <span className="font-Bold">HR6923400093231717432</span>
                  </li>
                  <li>
                    IBAN(kuna):{" "}
                    <span className="font-Bold">HR8623400093113155384</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-start">
            <span className="text-2xl font-ExtraBold text-dark_blue_black bg-gray-100 px-8 py-2 rounded-md inner_shadow">
              3.
            </span>
          </div>
          <div>
            <h3 className="font-titleBold text-xl mb-4">
              Confirmation of payment
            </h3>
            <p>
              When payment is done, we will confirm your payment and
              reservation. Relax and await peacefully you vacation in summer and
              enjoy in your vacations in holiday home Villa Eni in Poreč, Istria
              - Croatia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToReserve;
