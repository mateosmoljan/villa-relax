import ShowcaseGallery from "@/components/Gallery/ShowcaseGallery";
import ShowcaseGallery2 from "@/components/Gallery/ShowcaseGallery2";
import SendMessage from "@/components/SendMessage/SendMessage";

function Photogallery() {
  return (
    <section className="pt-[10rem]">
      <div className="">
        <div className=" container">
          <h2 className="font-ExtraBold text-center text-4xl text-dark_blue_black mb-12 tracking-wider">
            Photogallery Villa Panorama, Istra
          </h2>
        </div>
        <div>
          <div>
            <ShowcaseGallery />
          </div>
        </div>
        <div>
          <ShowcaseGallery2 />
        </div>
        <div>
          <SendMessage />
        </div>
      </div>
    </section>
  );
}

export default Photogallery;
