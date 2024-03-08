function ContactInfo() {
  return (
    <section className="sticky top-14 px-3">
      <div className=" rounded-md custom_border shadow-md px-4 pt-8 pb-5 hover:shadow-xl">
        <div className="ml-4 mb-4">
          <h2 className="mb-4 font-titleBold text-xl">Alen Smoljan</h2>
          <span className="text-sm">(contact person)</span>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>
              Address:{" "}
              <span className="font-Bold">Trsicani 42, 24323 Gajana</span>
            </li>
            <li>
              Mobile:{" "}
              <span className="text-yellow font-Bold">+(385) 0919406130</span>
            </li>
            <li>
              Email:{" "}
              <span className="font-Bold text-yellow">alen.s@gmail.com</span>
            </li>
            <li>We speak:</li>
            <li className="font-Bold">Croatian, English, German</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
