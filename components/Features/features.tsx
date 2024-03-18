"use client";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { Features } from "@/lib/features";
import { useEffect, useRef } from "react";

type Props = {
  handleClose: () => void;
};

function FeaturesComponent({ handleClose }: Props) {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-black/50 w-screen h-screen inset-0 fixed z-50 flex items-center justify-center">
      <div
        ref={featuresRef}
        className="flex flex-col justify-center items-end bg-white rounded-md h-[90%] w-[90%] md:w-[780px]"
      >
        <div className="flex p-3">
          <button
            onClick={() => handleClose()}
            className="text-white cursor-pointer p-2 close-button"
          >
            <RxCross2
              className=" text-2xl text-dark_blue_black hover:scale-150
                  transition-scale duration-300"
            />
          </button>
        </div>
        <div className="overflow-y-scroll h-[98%] w-full p-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-titleBold text-2xl text-dark_blue_black mb-4">
              What this place offers
            </h1>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Bathroom
              </h2>
              {Features.features.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} quality={100} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Bedroom and laundry
              </h2>
              {Features.features.slice(2, 10).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Entertainment
              </h2>
              <div
                className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
              >
                <Image
                  src={Features.features[10].icon}
                  alt={Features.features[10].icon_alt}
                />
                <li className={`py-4 flex flex-col justify-center`}>
                  {Features.features[10].title}
                </li>
              </div>
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Family
              </h2>
              {Features.features.slice(11, 19).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Heating and cooling
              </h2>
              {Features.features.slice(19, 22).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Home safety
              </h2>
              {Features.features.slice(22, 24).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Internet and office
              </h2>
              <div
                className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
              >
                <Image
                  src={Features.features[24].icon}
                  alt={Features.features[24].icon_alt}
                />
                <li className={`py-4 flex flex-col justify-center`}>
                  {Features.features[24].title}
                </li>
              </div>
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Kitchen and dining
              </h2>
              {Features.features.slice(25, 36).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Outdoor
              </h2>
              <div
                className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
              >
                <Image
                  src={Features.features[36].icon}
                  alt={Features.features[36].icon_alt}
                />
                <li className={`py-4 flex flex-col justify-center`}>
                  {Features.features[36].title}

                  <span className="text-sm text-grey">
                    {Features.features[36].des}
                  </span>
                </li>
              </div>
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Parking and facilities
              </h2>
              {Features.features.slice(37, 39).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Services
              </h2>
              {Features.features.slice(39, 43).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-titleBold text-xl text-dark_blue_black mb-3">
                Not included
              </h2>
              {Features.features.slice(43, 45).map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center border-b-[1px] border-[#e5e7eb]`}
                >
                  <Image src={item.icon} alt={item.icon_alt} />
                  <li className={`py-4 flex flex-col justify-center`}>
                    {item.title}

                    <span className="text-sm text-grey">{item.des}</span>
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesComponent;
