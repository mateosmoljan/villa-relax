import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        className="h-full  block absolute right-8 top-0 text-4xl z-10"
        onClick={onClick}
      >
        <FaArrowCircleRight className="text-grey1 hover:text-grey2 active:scale-75 transition-scale duration-200" />
      </button>
    </>
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        className="h-full  absolute  block top-0 text-4xl left-8 z-40"
        onClick={onClick}
      >
        <FaArrowCircleLeft className="text-grey1 hover:text-grey2 active:scale-75 transition-scale duration-200" />
      </button>
    </>
  );
}
