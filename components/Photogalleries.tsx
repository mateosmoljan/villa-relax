import { ImageGallery } from "@/lib/galleryImages";
import Image from "next/image";
import { TfiGallery } from "react-icons/tfi";

function Photogalleries() {
  return (
    <section className="flex justify-center">
      <div className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl p-3 py-20">
        <div className="w-6xl flex flex-col gap-3 pb-10">
          <h2 className="text-pink font-semibold uppercase">Photogalleries</h2>
          <h1 className="font-bold text-3xl">Select photos from Villa Relax</h1>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {ImageGallery.images.map((image, index) => (
            <div key={index} className="w-full h-full rounded-md	">
              <Image
                src={image.src}
                alt={image.alt}
                className=" object-cover rounded-md block w-full h-full hover:opacity-90"
              />
            </div>
          ))}
        </div>
        <div className="pt-5 flex justify-end">
          <button className="btn-2 flex gap-2">
            <TfiGallery />
            <span>Show Photogallery</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Photogalleries;
