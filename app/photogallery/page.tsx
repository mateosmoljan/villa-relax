import ProperyGallery from "@/components/Gallery/PropertyGallery";
import SendMessage from "@/components/SendMessage/SendMessage";

function Photogallery() {
  return (
    <section className="pt-[10rem]">
      <div className="">
        <div className="pb-28 container">
          <h2 className="font-ExtraBold text-center text-4xl text-dark_blue_black mb-12 tracking-wider">
            Photogallery Villa Panorama, Istra
          </h2>
        </div>
        <div>
          <ProperyGallery />
        </div>
        <div>
          <SendMessage />
        </div>
      </div>
    </section>
  );
}

export default Photogallery;
