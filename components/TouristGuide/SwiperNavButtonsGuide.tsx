import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        className="h-full  block absolute -right-8 top-0 text-3xl z-10"
        onClick={onClick}
      >
        <MdOutlineArrowForwardIos className="rounded-full p-1 bg-black/70 hover:bg-black text-grey2 " />
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
        <MdOutlineArrowBackIosNew className="rounded-full p-1 bg-black/70 hover:bg-black text-grey2 " />
      </button>
    </>
  );
}
