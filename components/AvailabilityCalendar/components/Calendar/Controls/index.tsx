import React from "react";
import { IControls } from "./../types";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Controls = ({ prev, initCal, next }: IControls): JSX.Element => {
  return (
    <div className="controls" data-testid="controls">
      <button
        className="btn back flex gap-1"
        onClick={() => prev()}
        data-testid="back"
      >
        <MdKeyboardDoubleArrowLeft className="text-xl" />
        Back
      </button>

      <button className="btn now" onClick={() => initCal()} data-testid="now">
        Reset
      </button>

      <button
        className="btn next flex gap-1"
        onClick={() => next()}
        data-testid="next"
      >
        Next
        <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
      </button>
    </div>
  );
};

export default Controls;
