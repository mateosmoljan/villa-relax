import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import IFrameMaps from "./iFrameMaps";

interface GoogleMapsProps {
  onClose: () => void;
}

function GoogleMaps({ onClose }: GoogleMapsProps) {
  return (
    <section className="flex justify-center fixed inset-0 items-center w-screen h-screen bg-black bg-opacity-50 z-50">
      <div className="container px-3 flex flex-col h-[75%] bg-white rounded-md transitionMap">
        <div className="flex justify-between py-3">
          <h1 className="font-bold text-xl">Location of Villa Relax</h1>
          <button onClick={onClose} className="text-xl">
            <RxCross2 />
          </button>
        </div>
        <div className="w-full h-full">
          <IFrameMaps />
        </div>
        <div className="py-3 flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close Map"
            className="btn-2 flex gap-2"
          >
            Close <ImCross />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GoogleMaps;
