import { getContactData } from "@/lib/contact";
import { useLocale } from "next-intl";

function ContactInfo() {
  const localeActive = useLocale();
  const ContactData = getContactData(localeActive);
  return (
    <section className="sticky top-14 sm:px-3">
      <div className=" rounded-md custom_border shadow-md px-4 pt-8 pb-5 hover:shadow-xl">
        <div className="ml-4 mb-4">
          <h2 className="mb-4 font-titleBold text-xl">Alen Smoljan</h2>
          <span className="text-sm">
            ({ContactData.data[0].contact_person})
          </span>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li>
              {ContactData.data[0].address}:{" "}
              <span className="font-Bold">Trsicani 42, 24323 Gajana</span>
            </li>
            <li>
              {ContactData.data[0].mobile}:{" "}
              <span className="text-yellow font-Bold">+(385) 0919406130</span>
            </li>
            <li>
              {ContactData.data[0].email_info}:{" "}
              <span className="font-Bold text-yellow">alen.s@gmail.com</span>
            </li>
            <li>{ContactData.data[0].we_speak}:</li>
            <li className="font-Bold">Croatian, English, German</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
