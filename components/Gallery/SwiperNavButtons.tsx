import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        className="h-full block absolute right-0 top-0 text-4xl z-10"
        onClick={onClick}
      >
        <div className="bg-grey2 sm:p-1 rounded-l-md">
          <IoIosArrowRoundForward className="text-black active:scale-75 transition-scale duration-100" />
        </div>
      </button>
    </>
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        className="h-full absolute block top-0 text-4xl left-0 z-40"
        onClick={onClick}
      >
        <div className="bg-grey2 sm:p-1 rounded-l-md">
          <IoIosArrowRoundBack className="text-black active:scale-75 transition-scale duration-100" />
        </div>
      </button>
    </>
  );
}
