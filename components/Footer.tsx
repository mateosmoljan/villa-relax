import Image from "next/image";
import SSL from "../public/assets/images/ssl.png";

function Footer() {
  return (
    <section className="bg-dark_blue_black xl:px-20 py-10 xl:pb-20 ">
      <div className="grid w-full text-white justify-evenly col-start-2 col-end-2">
        <div>
          <div className="space-y-4 ">
            <Image src={SSL} alt="ssl Villa Relax" width={200} />
            <p>©2023 . Villa Relax - Pula</p>
            <p>All rights protected</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold uppercase text-xl pb-5">Usefull Links</h2>
          <ul className="space-y-4">
            <li>
              <a href="/">Weather forecast</a>
            </li>
            <li>
              <a href="/">Tourismusverband Poreč</a>
            </li>
            <li>
              <a href="/">Road conditions</a>
            </li>
            <li>
              <a href="/">Via Michelin route planner</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold uppercase text-xl pb-5">
            DISCOVER PULA & ISTRIA
          </h2>
          <ul className="space-y-4">
            <li>
              <a href="/">About Pula</a>
            </li>
            <li>
              <a href="https://www.istra.hr/">Tourist guide Istra</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold uppercase text-xl pb-5">Contact Us</h2>
          <ul className="space-y-4">
            <li>Sandra Smoljan</li>
            <li>Schiavuzzijev prilaz 55</li>
            <li>+(385) 98263136</li>
            <li>villa.relax@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
