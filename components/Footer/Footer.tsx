import Image from "next/image";
import SSL from "@/public/assets/images/ssl.png";
import "./footer.css";
import Link from "next/link";

function Footer() {
  return (
    <section className="flex justify-center bg-dark_blue_black xl:px-20 pb-10 xl:pb-20 ">
      <div className="max-w-screen-2xl grid w-full text-white sm:grid-cols-2 gap-y-8 lg:grid-cols-4 place-items-center">
        <div className="h-full relative pl-5 sm:pl-0 w-full sm:w-3/5 lg:w-auto">
          <div className="space-y-4 ">
            <Image src={SSL} alt="ssl Villa Relax" width={200} />
            <p>©2024 . Villa Panorama - Istria</p>
            <p>All rights protected</p>
          </div>
        </div>
        <div className="w-full h-full relative pl-5 sm:pl-0 sm:w-3/5 lg:w-auto">
          <h2 className="font-bold uppercase text-xl pb-5">DISCOVER ISTRIA</h2>
          <ul className="space-y-4 !text-white">
            <li>
              <Link
                href="https://www.pulainfo.hr/"
                target="_blank"
                className="!text-white underline hover:!text-yellow"
              >
                Pula Info
              </Link>
            </li>
            <li>
              <Link
                href="https://www.istra.hr/"
                target="_blank"
                className="!text-white underline hover:!text-yellow"
              >
                Tourist guide Istra
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-full relative pl-5 sm:pl-0 w-full sm:w-3/5 lg:w-auto">
          <h2 className="font-bold uppercase text-xl pb-5">Contact Us</h2>
          <ul className="space-y-4">
            <li>Alen Smoljan</li>
            <li>Tršičani 43, 52215, Vodnjan</li>
            <li>+(385) 989406130</li>
            <li>villa.panorama@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
