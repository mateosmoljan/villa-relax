import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        className="h-full  block absolute -right-8 top-0 text-3xl z-10"
        onClick={onClick}
      >
        <FaArrowCircleRight className="text-dark_blue_black hover:text-neutral-800" />
      </button>
    </>
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        className="h-full  absolute  block top-0 text-3xl -left-8 z-40"
        onClick={onClick}
      >
        <FaArrowCircleLeft className="text-dark_blue_black hover:text-neutral-800" />
      </button>
    </>
  );
}
